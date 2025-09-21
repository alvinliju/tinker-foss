'use client';

import ClientLayout from "@/components/ClientLayout";
import Image from "next/image";
import { useEffect, useState } from 'react';

interface LeaderboardUser {
  id: number;
  name: string;
  points: number;
  avatar: string;
  joined: string;
}

interface LeaderboardStats {
  totalPlayers: number;
  activeToday: number;
  totalPointsEarned: number;
}

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [stats, setStats] = useState<LeaderboardStats>({
    totalPlayers: 0,
    activeToday: 0,
    totalPointsEarned: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('/api/leaderboard');
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard data');
      }
      const data = await response.json();
      setLeaderboardData(data.leaderboard);
      setStats(data.stats);
    } catch (err) {
      console.error('Error fetching leaderboard:', err);
      setError('Failed to load leaderboard data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={fetchLeaderboardData}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ClientLayout/>

      <header className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12">
            {/* Official TinkerHub Logo */}
            <div className="h-full w-full  bg-white rounded-lg flex items-center justify-center mx-auto mb-8 p-2">
              <Image 
                src="https://paths.tinkerhub.org/logo.png" 
                alt="TinkerHub Logo" 
                width={120}
                    height={120}
                className="rounded-md"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-normal text-black mb-6 text-balance">
              Community Leaderboard
            </h1>

            <div className="text-gray-500 text-sm space-y-1">
              <p>Top contributors building the future</p>
              <p>
                Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        <div className="space-y-12">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-black">{stats.totalPlayers.toLocaleString()}</p>
              <p className="text-gray-500 mt-2">Builders</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-black">{stats.activeToday}</p>
              <p className="text-gray-500 mt-2">Active Today</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-black">{stats?.totalPointsEarned?.toLocaleString() || 0}</p>
              <p className="text-gray-500 mt-2">Points Earned</p>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="space-y-4">
            <h2 className="text-2xl font-normal text-black mb-6">Top Contributors</h2>
            
            {leaderboardData.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No contributors yet!</p>
                <p className="text-sm text-gray-400">
                  Be the first to complete a course and earn points.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {leaderboardData.map((player) => (
                  <div 
                    key={player.id} 
                    className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-medium text-gray-400 w-8">
                        {player.id}
                      </div>
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                        {player.avatar && player.avatar !== '/placeholders/avatar-default.svg' ? (
                          <Image 
                            src={player.avatar} 
                            alt={player.name} 
                            width={40} 
                            height={40} 
                            className="rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-black">
                          {player.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          Joined {new Date(player.joined).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="text-lg font-medium text-black">
                      {player.points} pts
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="text-center py-8 border-t border-gray-100">
            <p className="text-gray-500 mb-4">
              Points are earned by completing courses, contributing to projects, and participating in events.
            </p>
            <a 
              href="/course"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm inline-block"
            >
              Start Learning
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-400">— TinkerHub Community</p>
        </div>
      </footer>
    </div>
  );
}