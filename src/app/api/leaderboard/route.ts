import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Get top 10 users by points
    const { data: topUsers, error: usersError } = await supabase
      .from('users')
      .select('username, total_points, avatar_url, created_at')
      .order('total_points', { ascending: false })
      .limit(10);

    if (usersError) {
      console.error('Error fetching top users:', usersError);
      return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
    }

    // Get stats
    const { data: stats, error: statsError } = await supabase
      .from('users')
      .select(`
        total_points,
        lesson_progress!inner(completed_at)
      `);

    if (statsError) {
      console.error('Error fetching stats:', statsError);
      return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }

    const totalUsers = stats?.length || 0;
    const totalPointsEarned = stats?.reduce((sum, user) => sum + (user.total_points || 0), 0) || 0;
    
    // Count active users today
    const today = new Date().toISOString().split('T')[0];
    const activeToday = stats?.filter(user => 
      user.lesson_progress?.some((progress: any) => 
        progress.completed_at?.startsWith(today)
      )
    ).length || 0;

    return NextResponse.json({
      leaderboard: topUsers?.map((user, index) => ({
        id: index + 1,
        name: user.username,
        points: user.total_points,
        avatar: user.avatar_url || '/placeholders/avatar-default.svg',
        joined: user.created_at
      })) || [],
      stats: {
        totalPlayers: totalUsers,
        activeToday,
        totalPointsEarned
      }
    });

  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
