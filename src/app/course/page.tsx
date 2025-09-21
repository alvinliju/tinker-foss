"use client"

import { useState, useEffect } from "react"
import { useUser, SignInButton, UserButton } from "@clerk/nextjs"
import ReactMarkdown from "react-markdown"
import { courses } from "@/data/course"
import remarkGfm from "remark-gfm"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CoursePage() {
  const { isSignedIn, user, isLoaded } = useUser()
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0)
  const [userProgress, setUserProgress] = useState<{ [key: number]: boolean }>({})
  const [totalPoints, setTotalPoints] = useState(0)
  const [loading, setLoading] = useState(false)
  const [dataLoading, setDataLoading] = useState(true)

  const currentCourse = courses[currentCourseIndex]

  const goToNext = () => currentCourseIndex < courses.length - 1 && setCurrentCourseIndex(currentCourseIndex + 1)
  const goToPrevious = () => currentCourseIndex > 0 && setCurrentCourseIndex(currentCourseIndex - 1)

  useEffect(() => {
    if (isSignedIn && user) {
      fetchUserProgress()
    } else if (isLoaded && !isSignedIn) {
      setDataLoading(false)
    }
  }, [isSignedIn, user, isLoaded])

  const fetchUserProgress = async () => {
    try {
      setDataLoading(true)
      const response = await fetch("/api/lessons/progress")
      if (response.ok) {
        const data = await response.json()
        const progressMap: { [key: number]: boolean } = {}
        data.progress.forEach((item: any) => {
          progressMap[item.lessonId] = item.completed
        })
        setUserProgress(progressMap)
        setTotalPoints(data.totalPoints)
      }
    } catch (error) {
      console.error("Error fetching progress:", error)
    } finally {
      setDataLoading(false)
    }
  }

  const completeLesson = async (lessonId: number) => {
    if (!isSignedIn) return

    setLoading(true)
    try {
      const response = await fetch("/api/lessons/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId }),
      })

      if (response.ok) {
        const data = await response.json()
        setUserProgress((prev) => ({ ...prev, [lessonId]: true }))
        setTotalPoints(data.totalPoints)
      }
    } catch (error) {
      console.error("Error completing lesson:", error)
    } finally {
      setLoading(false)
    }
  }

  if (!isLoaded || dataLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading course...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">


      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Lesson {currentCourseIndex + 1} of {courses.length}
                </div>
                {isSignedIn && (
                  <div className="text-sm text-muted-foreground">
                    {Object.values(userProgress).filter(Boolean).length} completed
                  </div>
                )}
              </div>

              <h1 className="text-3xl font-bold text-balance">{currentCourse.title}</h1>
              <p className="text-muted-foreground">{currentCourse.duration}</p>
            </div>

            <Card className="p-8">
              <div className="prose prose-gray max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                    code: ({ inline, className, children, ...props }: any) =>
                      inline ? (
                        <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props}>
                          {children}
                        </code>
                      ) : (
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto" {...props}>
                          <code>{children}</code>
                        </pre>
                      ),
                    a: ({ node, ...props }) => <a className="text-primary underline" {...props} />,
                  }}
                >
                  {currentCourse.content}
                </ReactMarkdown>
              </div>
            </Card>

            {/* Action Section */}
            <div className="space-y-4">
              {isSignedIn ? (
                userProgress[currentCourse.id] ? (
                  <Card className="p-6 bg-green-50 border-green-200">
                    <div className="flex items-center gap-2 text-green-800">
                      <span>✓</span>
                      <span className="font-medium">Lesson completed!</span>
                    </div>
                  </Card>
                ) : (
                  <Button
                    onClick={() => completeLesson(currentCourse.id)}
                    disabled={loading}
                    className="w-full"
                    size="lg"
                  >
                    {loading ? "Completing..." : "Complete Lesson"}
                  </Button>
                )
              ) : (
                <Card className="p-6 text-center">
                  <p className="text-muted-foreground mb-4">Sign in to track your progress</p>
                  <SignInButton mode="modal">
                    <Button>Sign in with GitHub</Button>
                  </SignInButton>
                </Card>
              )}

              {/* Navigation */}
              <div className="flex gap-3">
                <Button
                  onClick={goToPrevious}
                  disabled={currentCourseIndex === 0}
                  variant="outline"
                  className="flex-1 bg-transparent"
                >
                  ← Previous
                </Button>
                <Button
                  onClick={goToNext}
                  disabled={currentCourseIndex === courses.length - 1}
                  variant="outline"
                  className="flex-1 bg-transparent"
                >
                  Next →
                </Button>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-4">
            <h3 className="font-medium">All Lessons</h3>
            <div className="space-y-2">
              {courses.map((course, index) => (
                <button
                  key={course.id}
                  onClick={() => setCurrentCourseIndex(index)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    index === currentCourseIndex ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{course.title}</div>
                      <div className="text-xs opacity-75">{course.duration}</div>
                    </div>
                    {isSignedIn && userProgress[course.id] && <span className="text-green-500 text-sm">✓</span>}
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
