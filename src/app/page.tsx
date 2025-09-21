"use client"

import Link from "next/link"
import Image from "next/image"
import { useUser, SignInButton, UserButton } from "@clerk/nextjs"

export default function LandingPage() {
  const { isSignedIn, isLoaded } = useUser()

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://paths.tinkerhub.org/logo.png"
                alt="TinkerHub Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="font-medium text-black">TinkerHub</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/course" className="text-gray-500 hover:text-black transition-colors text-sm">
                Course
              </Link>
              <Link href="/letter" className="text-gray-500 hover:text-black transition-colors text-sm">
                Letter
              </Link>
              <Link href="/leaderboard" className="text-gray-500 hover:text-black transition-colors text-sm">
                Leaderboard
              </Link>
              {isLoaded &&
                (isSignedIn ? (
                  <UserButton afterSignOutUrl="/" />
                ) : (
                  <SignInButton mode="modal">
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                      Sign in
                    </button>
                  </SignInButton>
                ))}
            </nav>
          </div>
        </div>
      </div>

      <header className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12">
            <div className="h-full w-full bg-white rounded-lg flex items-center justify-center mx-auto mb-8 p-2">
              <Image
                src="https://paths.tinkerhub.org/logo.png"
                alt="TinkerHub Logo"
                width={120}
                height={120}
                className="rounded-md"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-normal text-black mb-6 text-balance">
              Learn FOSS. Build your career.
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-balance">
              A practical challenge for developers who want to contribute to open source.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        <div className="space-y-12 text-gray-700 leading-relaxed text-lg">
          <div className="space-y-6">
            <p className="text-2xl text-black">Most developers use open source daily but never contribute back.</p>
            <p>They miss out on the best way to learn, network, and prove their skills.</p>
            <p>
              This challenge fixes that. Learn by doing. Contribute to real projects. Build a portfolio that matters.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-black">Here's how it works:</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-black font-medium">1.</span>
                <p>Complete practical lessons on Git, GitHub, and contributing</p>
              </div>
              <div className="flex gap-4">
                <span className="text-black font-medium">2.</span>
                <p>Find beginner-friendly projects that match your skills</p>
              </div>
              <div className="flex gap-4">
                <span className="text-black font-medium">3.</span>
                <p>Make your first pull request with confidence</p>
              </div>
              <div className="flex gap-4">
                <span className="text-black font-medium">4.</span>
                <p>Earn points, climb the leaderboard, unlock opportunities</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-xl text-black mb-4">No theory. No fluff. Just practical skills.</p>
            <p className="text-gray-600 mb-8">Join developers who are already building their open source careers.</p>
            <div className="space-y-4">
              <Link href="/course">
                <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium">
                  Start the Challenge
                </button>
              </Link>
              <div className="flex justify-center gap-6 text-sm">
                <Link href="/letter" className="text-gray-600 hover:text-black transition-colors underline">
                  Read our story
                </Link>
                <Link href="/leaderboard" className="text-gray-600 hover:text-black transition-colors underline">
                  View leaderboard
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-black">Why this matters:</p>
            <p>Indian developers are incredibly talented. But most never contribute to the tools they use daily.</p>
            <p>It's not because they can't — it's because no one showed them how.</p>
            <p>This challenge changes that. One developer at a time.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-400">— TinkerHub</p>
        </div>
      </footer>
    </div>
  )
}
