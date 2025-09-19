import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { runQuery, runStatement } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { lessonId } = await request.json();
    
    if (!lessonId || typeof lessonId !== 'number') {
      return NextResponse.json({ error: 'Invalid lesson ID' }, { status: 400 });
    }

    const pointsPerLesson = parseInt(process.env.POINTS_PER_LESSON || '10');

    try {
      // Check if lesson is already completed
      const existingProgress = await runQuery(
        'SELECT * FROM lesson_progress WHERE user_id = ? AND lesson_id = ?',
        [userId, lessonId]
      );

      if (existingProgress.length > 0 && existingProgress[0].completed) {
        return NextResponse.json({ 
          message: 'Lesson already completed',
          points: existingProgress[0].points_earned 
        });
      }

      // Mark lesson as completed or insert new progress
      await runStatement(
        `INSERT OR REPLACE INTO lesson_progress 
         (user_id, lesson_id, completed, points_earned, completed_at) 
         VALUES (?, ?, 1, ?, datetime('now'))`,
        [userId, lessonId, pointsPerLesson]
      );

      // Update user's total points
      await runStatement(
        `UPDATE users SET total_points = (
          SELECT COALESCE(SUM(points_earned), 0) 
          FROM lesson_progress 
          WHERE user_id = ? AND completed = 1
        ) WHERE clerk_id = ?`,
        [userId, userId]
      );

      // Get updated user data
      const updatedUsers = await runQuery(
        'SELECT total_points FROM users WHERE clerk_id = ?',
        [userId]
      );

      const totalPoints = updatedUsers.length > 0 ? updatedUsers[0].total_points : 0;

      return NextResponse.json({
        message: 'Lesson completed successfully',
        pointsEarned: pointsPerLesson,
        totalPoints: totalPoints
      });

    } catch (error) {
      console.error('Database error:', error);
      throw error;
    }

  } catch (error) {
    console.error('Error completing lesson:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
