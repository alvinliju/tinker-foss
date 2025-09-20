"use client"

import { useState, useEffect } from "react"
import { useUser, SignInButton, UserButton } from "@clerk/nextjs"
import ReactMarkdown from "react-markdown"
import { courses, Course } from "@/data/course"
import remarkGfm from "remark-gfm"
import Image from "next/image";
import Link from "next/link";

export default function CoursePage() {
  const { isSignedIn, user, isLoaded } = useUser()
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0)
  const [userProgress, setUserProgress] = useState<{ [key: number]: boolean }>({})
  const [totalPoints, setTotalPoints] = useState(0)
  const [loading, setLoading] = useState(false)
  const currentCourse = courses[currentCourseIndex]

  const goToNext = () => currentCourseIndex < courses.length - 1 && setCurrentCourseIndex(currentCourseIndex + 1)
  const goToPrevious = () => currentCourseIndex > 0 && setCurrentCourseIndex(currentCourseIndex - 1)
  const goToCourse = (index: number) => setCurrentCourseIndex(index)

  useEffect(() => {
    if (isSignedIn && user) {
      fetchUserProgress()
    }
  }, [isSignedIn, user])

  const fetchUserProgress = async () => {
    try {
      const response = await fetch('/api/lessons/progress')
      if (response.ok) {
        const data = await response.json()
        setUserProgress(data.progress)
        setTotalPoints(data.totalPoints)
      }
    } catch (error) {
      console.error('Error fetching progress:', error)
    }
  }

  const completeLesson = async (lessonId: number) => {
    if (!isSignedIn) return

    setLoading(true)
    try {
      const response = await fetch('/api/lessons/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lessonId }),
      })

      if (response.ok) {
        const data = await response.json()
        setUserProgress(prev => ({ ...prev, [lessonId]: true }))
        setTotalPoints(data.totalPoints)
      }
    } catch (error) {
      console.error('Error completing lesson:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
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
            <div className="flex items-center gap-6">
              <nav className="flex gap-6">
                <Link href="/course" className="text-black text-sm">Courses</Link>
                <Link href="/letter" className="text-gray-500 hover:text-black transition-colors text-sm">Letter</Link>
                <Link href="/leaderboard" className="text-gray-500 hover:text-black transition-colors text-sm">Leaderboard</Link>
              </nav>
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/course" />
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </div>
          </div>
        </div>
      </div>

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
              FOSS Learning Journey
            </h1>

            <div className="text-gray-500 text-sm mb-8">
              Lesson {currentCourse.id} of {courses.length} • {currentCourse.duration}
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <div
                className="bg-black h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentCourseIndex + 1) / courses.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Authentication Section - Simplified since we have navbar auth */}
      {isSignedIn && (
        <div className="max-w-2xl mx-auto px-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Welcome back, {user?.firstName || user?.username}!</p>
                <p className="text-sm text-gray-600">{totalPoints} points earned</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 pb-16 lg:flex lg:gap-12">
        <main className="flex-1 max-w-2xl space-y-8 text-gray-700 leading-relaxed text-lg">
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ node, ...props }) => <p className="mb-4" {...props} />,
              li: ({ node, ...props }) => <li className="ml-6 mb-2" {...props} />,
              code: ({ inline, className, children, ...props }: any) =>
                inline ? (
                  <code className="bg-gray-100 px-1 rounded text-sm" {...props}>{children}</code>
                ) : (
                  <pre className="bg-gray-100 p-4 rounded overflow-x-auto" {...props}><code>{children}</code></pre>
                ),
              a: ({ node, ...props }) => <a className="text-blue-600 underline" {...props} />,
            }}
          >
            {currentCourse.content}
          </ReactMarkdown>

          {isSignedIn && !userProgress[currentCourse.id] && (
            <button
              onClick={() => completeLesson(currentCourse.id)}
              disabled={loading}
              className={`w-full px-8 py-4 rounded-lg font-medium transition-colors mb-6 ${loading ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
                }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                  Completing...
                </span>
              ) : (
                `Complete Lesson & Earn 10 Points`
              )}
            </button>
          )}

          {isSignedIn && userProgress[currentCourse.id] && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-green-600">✓</span>
                <span className="font-medium text-green-800">Lesson Completed!</span>
              </div>
              <p className="text-sm text-green-600">You earned 10 points for this lesson.</p>
            </div>
          )}

          {!isSignedIn && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 mb-3">Sign in to complete lessons and earn points!</p>
              <SignInButton mode="modal">
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                  Sign in with GitHub
                </button>
              </SignInButton>
            </div>
          )}

          <div className="flex justify-between items-center pt-8 border-t border-gray-100">
            <button
              onClick={goToPrevious}
              disabled={currentCourseIndex === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${currentCourseIndex === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              Previous
            </button>
            <span className="text-sm text-gray-500">
              {currentCourseIndex + 1} of {courses.length}
            </span>
            <button
              onClick={goToNext}
              disabled={currentCourseIndex === courses.length - 1}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${currentCourseIndex === courses.length - 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
                }`}
            >
              Next
            </button>
          </div>
        </main>

        <aside className="lg:w-80 space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-4">All Lessons</h3>
            <div className="space-y-2">
              {courses.map((course, index) => (
                <button
                  key={course.id}
                  onClick={() => goToCourse(index)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${index === currentCourseIndex
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{course.title}</div>
                      <div className="text-xs opacity-75">{course.duration}</div>
                    </div>
                    {isSignedIn && userProgress[course.id] && (
                      <span className="text-green-500 text-sm">✓</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
