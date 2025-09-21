import { NextRequest, NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { supabase, ensureUserExists } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
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

    try {
      // Get user's lesson progress
      const { data: progressData, error: progressError } = await supabase
        .from('lesson_progress')
        .select('lesson_id, completed, points_earned, completed_at')
        .eq('user_id', userId)
        .order('lesson_id');

      if (progressError) {
        console.error('Error fetching progress data:', progressError);
        throw progressError;
      }

      // Get user's total points
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('total_points')
        .eq('clerk_id', userId)
        .single();

      if (userError) {
        console.error('Error fetching user data:', userError);
        throw userError;
      }

      const totalPoints = userData?.total_points || 0;

      // Format progress data
      const progress = progressData.map((item: any) => ({
        lessonId: item.lesson_id,
        completed: Boolean(item.completed),
        pointsEarned: item.points_earned,
        completedAt: item.completed_at
      }));

      console.log(`📊 Progress fetched for user ${userId}: ${progress.length} lessons, ${totalPoints} total points`);

      return NextResponse.json({
        progress,
        totalPoints
      });

    } catch (error) {
      console.error('Database error:', error);
      throw error;
    }

  } catch (error) {
    console.error('Error fetching progress:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
