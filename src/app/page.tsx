'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser, SignInButton, UserButton } from '@clerk/nextjs';
import ClientLayout from '@/components/ClientLayout';

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

export default function CTFLandingPage() {
  const { isSignedIn, isLoaded } = useUser();
  const [topLeaders, setTopLeaders] = useState<LeaderboardUser[]>([]);
  const [stats, setStats] = useState<LeaderboardStats>({
    totalPlayers: 0,
    activeToday: 0,
    totalPointsEarned: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('/api/leaderboard');
      if (response.ok) {
        const data = await response.json();
        setTopLeaders(data.leaderboard.slice(0, 3)); // Get top 3 for display
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ClientLayout/>

      <header className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12">
            {/* Official TinkerHub Logo */}
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-8 p-2">
        <Image
                src="https://paths.tinkerhub.org/logo.png" 
                alt="TinkerHub Logo" 
                width={48} 
                height={48}
                className="rounded-md"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-normal text-black mb-6 text-balance">TinkerHub FOSS Challenge</h1>

            <div className="text-gray-500 text-sm space-y-1">
              <p>A hands-on journey into open source.</p>
              <p>Learn. Build. Contribute. Lead.</p>
            </div>
          </div>
        </div>
      </header>

      

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-400">— TinkerHub FOSS Challenge</p>
        </div>
      </footer>
    </div>
  )
}
