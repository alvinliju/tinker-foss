import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { runQuery } from '@/lib/db';


export async function GET(request: NextRequest) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
      // Get user's lesson progress
      const progressData = await runQuery(
        `SELECT 
          lp.lesson_id,
          lp.completed,
          lp.points_earned,
          lp.completed_at,
          u.total_points
         FROM lesson_progress lp
         JOIN users u ON u.clerk_id = lp.user_id
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
