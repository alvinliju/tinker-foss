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


            <main className="max-w-2xl mx-auto px-4 pb-16">
                <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
                    <div className="space-y-6">
                        <p className="text-xl">Ready to dive deep into open source?</p>

                        <p>
                            This isn't just another course. It's a challenge-based journey where you'll learn by doing, contribute to
                            real projects, and build skills that matter in the real world.
                        </p>

                        <p>
                            Think of it as a CTF (Capture The Flag) for FOSS enthusiasts — but instead of capturing flags, you're
                            capturing knowledge, building projects, and making meaningful contributions to the open source ecosystem.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <p className="text-xl">How it works:</p>

                        <div className="space-y-4">
                            <div className="border-l-4 border-gray-200 pl-6 py-2">
                                <p className="font-medium text-gray-900">1. Choose Your Path</p>
                                <p className="text-gray-600">Pick from beginner to advanced tracks based on your experience.</p>
                            </div>

                            <div className="border-l-4 border-gray-200 pl-6 py-2">
                                <p className="font-medium text-gray-900">2. Complete Challenges</p>
                                <p className="text-gray-600">
                                    Hands-on tasks that teach you Git, GitHub, project contribution, and community building.
                                </p>
                            </div>

                            <div className="border-l-4 border-gray-200 pl-6 py-2">
                                <p className="font-medium text-gray-900">3. Build & Contribute</p>
                                <p className="text-gray-600">Work on real open source projects and make meaningful contributions.</p>
                            </div>

                            <div className="border-l-4 border-gray-200 pl-6 py-2">
                                <p className="font-medium text-gray-900">4. Climb the Leaderboard</p>
                                <p className="text-gray-600">
                                    Earn points for completing challenges, helping others, and contributing to projects.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="py-8">
                        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                            <h3 className="text-xl font-medium text-gray-900">Current Leaderboard</h3>

                            {loading ? (
                                <div className="text-center py-8">
                                    <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-2"></div>
                                    <p className="text-gray-500 text-sm">Loading leaderboard...</p>
                                </div>
                            ) : topLeaders.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-500 mb-2">No leaders yet!</p>
                                    <p className="text-sm text-gray-400">Be the first to complete a course and earn points.</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {topLeaders.map((leader, index) => {
                                        const medals = ['🥇', '🥈', '🥉'];
                                        const colors = ['text-yellow-600', 'text-gray-400', 'text-orange-600'];
                                        return (
                                            <div key={leader.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                                                <div className="flex items-center space-x-3">
                                                    <span className={`text-lg font-bold ${colors[index]}`}>
                                                        {medals[index]}
                                                    </span>
                                                    <span className="font-medium">{leader.name}</span>
                                                </div>
                                                <span className="text-gray-600">{leader.points.toLocaleString()} pts</span>
                                            </div>
                                        );
                                    })}
                                    <div className="text-center pt-2">
                                        <p className="text-sm text-gray-500">
                                            Join {stats.totalPlayers} participant{stats.totalPlayers !== 1 ? 's' : ''} already on the journey
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-xl">What you'll learn:</p>

                        <ul className="space-y-2 pl-6">
                            <li>• Git and GitHub workflows that professionals actually use</li>
                            <li>• How to find, evaluate, and contribute to open source projects</li>
                            <li>• Code review processes and collaboration best practices</li>
                            <li>• Documentation writing and community building</li>
                            <li>• Project maintenance and leadership skills</li>
                            <li>• Building your open source portfolio and reputation</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <p>
                            By the end of this challenge, you won't just understand open source — you'll be an active contributor with
                            real projects under your belt and connections in the community.
                        </p>

                        <p>
                            <strong>This is learning by doing, not just watching.</strong>
                        </p>
                    </div>

                    <div className="text-center py-12">
                        <p className="text-xl mb-6">Ready to start your FOSS journey?</p>
                        <p className="text-gray-500 mb-8">
                            Join hundreds of developers who are already building their open source careers.
                        </p>

                        <div className="space-y-4">
                            <Link
                                href="/course"
                                className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Start the Challenge
                            </Link>
                            <div className="space-x-6">
                                <Link href="/course" className="text-gray-600 hover:text-black transition-colors underline">
                                    View Courses
                                </Link>
                                <Link href="/leaderboard" className="text-gray-600 hover:text-black transition-colors underline">
                                    See Full Leaderboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-gray-100 py-8 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-sm text-gray-400">— TinkerHub FOSS Challenge</p>
                </div>
            </footer>
        </div>
    )
}
