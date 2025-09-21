"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser, SignInButton, UserButton } from '@clerk/nextjs';
import ClientLayout from '@/components/ClientLayout';

export default function LandingPage() {
  const { isSignedIn, isLoaded } = useUser()

  return (
    <div className="min-h-screen bg-white">
      <ClientLayout/>

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

      

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-400">— TinkerHub</p>
        </div>
      </footer>
    </div>
  )
}
