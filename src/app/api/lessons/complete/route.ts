import { NextRequest, NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { supabase, ensureUserExists } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    console.log(userId)
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Ensure user exists in our database
    await ensureUserExists(userId, {
      username: user.username,
      firstName: user.firstName,
      email: user.emailAddresses[0]?.emailAddress,
      imageUrl: user.imageUrl
    });

    const { lessonId } = await request.json();
    
    if (!lessonId || typeof lessonId !== 'number') {
      return NextResponse.json({ error: 'Invalid lesson ID' }, { status: 400 });
    }

    const pointsPerLesson = parseInt(process.env.POINTS_PER_LESSON || '10');

    // Check if lesson is already completed
    const { data: existingProgress } = await supabase
      .from('lesson_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)
      .single();

    if (existingProgress && existingProgress.completed) {
      return NextResponse.json({ 
        message: 'Lesson already completed',
        points: existingProgress.points_earned 
      });
    }

    // Mark lesson as complete
    const { error: progressError } = await supabase
      .from('lesson_progress')
      .upsert({
        user_id: userId,
        lesson_id: lessonId,
        completed: true,
        points_earned: pointsPerLesson,
        completed_at: new Date().toISOString()
      });

    if (progressError) {
      console.error('Error updating lesson progress:', progressError);
      return NextResponse.json({ error: 'Failed to update progress' }, { status: 500 });
    }

    // Update user's total points
    // First, get the current points
    const { data: currentUserData, error: fetchError } = await supabase
      .from('users')
      .select('total_points')
      .eq('clerk_id', userId)
      .single();

    if (fetchError) {
      console.error('Error fetching user data:', fetchError);
      return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
    }

    const newTotalPoints = (currentUserData?.total_points || 0) + pointsPerLesson;

    const { error: userError } = await supabase
      .from('users')
      .update({ 
        total_points: newTotalPoints,
        updated_at: new Date().toISOString()
      })
      .eq('clerk_id', userId);

    if (userError) {
      console.error('Error updating user points:', userError);
      return NextResponse.json({ error: 'Failed to update points' }, { status: 500 });
    }

    // Get updated user data
    const { data: updatedUser } = await supabase
      .from('users')
      .select('total_points')
      .eq('clerk_id', userId)
      .single();

    console.log(`✅ Lesson ${lessonId} completed for user ${userId}. Points earned: ${pointsPerLesson}, Total: ${updatedUser?.total_points || 0}`);

    return NextResponse.json({
      message: 'Lesson completed successfully',
      pointsEarned: pointsPerLesson,
      totalPoints: updatedUser?.total_points || 0
    });

  } catch (error) {
    console.error('Error completing lesson:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
