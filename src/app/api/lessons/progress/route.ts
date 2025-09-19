import { NextRequest, NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { runQuery, ensureUserExists } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get current user data from Clerk
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
      const progressData = await runQuery(
        `SELECT 
          lp.lesson_id,
          lp.completed,
          lp.points_earned,
          lp.completed_at
         FROM lesson_progress lp
         WHERE lp.user_id = ?
         ORDER BY lp.lesson_id`,
        [userId]
      );

      // Get user's total points
      const userData = await runQuery(
        'SELECT total_points FROM users WHERE clerk_id = ?',
        [userId]
      );

      const totalPoints = userData.length > 0 ? userData[0].total_points : 0;

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
