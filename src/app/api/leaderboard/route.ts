import { NextRequest, NextResponse } from 'next/server';
import { runQuery } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Get top 10 users by total points
    const leaderboardQuery = `
      SELECT 
        username,
        total_points,
        avatar_url,
        created_at
      FROM users 
      WHERE total_points > 0
      ORDER BY total_points DESC 
      LIMIT 10
    `;

    const leaderboardData = await runQuery(leaderboardQuery);

    // Get total stats - FIXED to track actual activity
    const statsQuery = `
      SELECT 
        COUNT(*) as total_users,
        COUNT(DISTINCT CASE WHEN DATE(lp.completed_at) = DATE('now') THEN lp.user_id END) as active_today,
        SUM(total_points) as total_points_earned
      FROM users u
      LEFT JOIN lesson_progress lp ON u.clerk_id = lp.user_id
    `;

    const statsData = await runQuery(statsQuery);
    const stats = statsData[0] || { total_users: 0, active_today: 0, total_points_earned: 0 };

    return NextResponse.json({
      leaderboard: leaderboardData.map((user, index) => ({
        id: index + 1,
        name: user.username,
        points: user.total_points,
        avatar: user.avatar_url || '/placeholders/avatar-default.svg',
        joined: user.created_at
      })),
      stats: {
        totalPlayers: stats.total_users,
        activeToday: stats.active_today,
        totalPointsEarned: stats.total_points_earned
      }
    });

  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard data' },
      { status: 500 }
    );
  }
}
