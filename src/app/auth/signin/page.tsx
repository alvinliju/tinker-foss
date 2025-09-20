'use client';

import { signIn, getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        router.push('/course');
      }
    };
    checkSession();
  }, [router]);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn('github', { callbackUrl: '/course' });
    } catch (error) {
      console.error('Sign in error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-medium text-black">TinkerHub</span>
            </a>
            <nav className="flex gap-6">
              <a href="/" className="text-gray-500 hover:text-black transition-colors text-sm">Courses</a>
              <a href="/letter" className="text-gray-500 hover:text-black transition-colors text-sm">Letter</a>
              <a href="/leader-board" className="text-gray-500 hover:text-black transition-colors text-sm">Leaderboard</a>
            </nav>
          </div>
        </div>
      </div>

      <header className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12">
            {/* Simple logo */}
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-8">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-normal text-black mb-6 text-balance">
              Sign in to TinkerHub
            </h1>

            <div className="text-gray-500 text-lg mb-8">
              <p>Continue your learning journey and earn points for completing lessons.</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        <div className="text-center">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg">
              Sign in with your GitHub account to track your progress and earn points as you complete lessons.
            </p>

            <button
              onClick={handleSignIn}
              disabled={loading}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium transition-colors ${
                loading
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  Continue with GitHub
                </>
              )}
            </button>

            <div className="text-sm text-gray-500 space-y-2">
              <p>By signing in, you agree to our terms of service.</p>
              <p>We only access your basic GitHub profile information.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-400">— TinkerHub</p>
        </div>
      </footer>
    </div>
  );
}
