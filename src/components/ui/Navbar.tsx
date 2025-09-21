'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser, SignInButton, UserButton } from '@clerk/nextjs';

export default function Navbar() {
  const { isSignedIn, isLoaded } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://paths.tinkerhub.org/logo.png"
              alt="TinkerHub Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="font-semibold text-gray-900">TinkerHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link 
                href="/course" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Courses
              </Link>
              <Link 
                href="/letter" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Letter
              </Link>
              <Link 
                href="/leaderboard" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Leaderboard
              </Link>
            </div>
            
            {/* Desktop Auth */}
            {isLoaded && (
              isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                    Sign In
                  </button>
                </SignInButton>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/course" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/letter" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Letter
              </Link>
              <Link 
                href="/leaderboard" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leaderboard
              </Link>
            </div>
            
            {/* Mobile Auth Section */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              {isLoaded && (
                isSignedIn ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Account</span>
                    <UserButton afterSignOutUrl="/" />
                  </div>
                ) : (
                  <SignInButton mode="modal">
                    <button 
                      className="w-full bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign In
                    </button>
                  </SignInButton>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

