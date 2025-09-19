"use client"

import { useState } from "react"

interface Course {
  id: number
  title: string
  content: string
  duration: string
}


export default function CoursePage() {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0)
  const currentCourse = courses[currentCourseIndex]

  const goToNext = () => {
    if (currentCourseIndex < courses.length - 1) {
      setCurrentCourseIndex(currentCourseIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (currentCourseIndex > 0) {
      setCurrentCourseIndex(currentCourseIndex - 1)
    }
  }

  const goToCourse = (index: number) => {
    setCurrentCourseIndex(index)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <div className="mb-12">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-8">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>

              <h1 className="text-4xl md:text-5xl font-normal text-black mb-6 text-balance">{currentCourse.title}</h1>

              <div className="text-gray-500 text-sm space-y-1">
                <p>
                  Lesson {currentCourse.id} of {courses.length} • {currentCourse.duration}
                </p>
              </div>
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

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:justify-between lg:gap-12">
          {/* Main content */}
          <main className="flex-1 max-w-2xl">
            <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
              {currentCourse.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("•")) {
                  const lines = paragraph.split("\n")
                  return (
                    <ul key={index} className="space-y-2 pl-6">
                      {lines.map(
                        (line, lineIndex) =>
                          line.startsWith("•") && (
                            <li key={lineIndex} className="text-lg">
                              {line}
                            </li>
                          ),
                      )}
                    </ul>
                  )
                }
                return (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                )
              })}

              <div className="flex items-center justify-between pt-12 border-t border-gray-100">
                <button
                  onClick={goToPrevious}
                  disabled={currentCourseIndex === 0}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    currentCourseIndex === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-600 hover:text-black underline"
                  }`}
                >
                  ← Previous
                </button>

                <button
                  onClick={goToNext}
                  disabled={currentCourseIndex === courses.length - 1}
                  className={`px-8 py-3 rounded-lg transition-colors ${
                    currentCourseIndex === courses.length - 1
                      ? "text-gray-400 cursor-not-allowed bg-gray-100"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          </main>

          {/* Right sidebar - Desktop only */}
          <aside className="w-80 sticky top-8 self-start">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-6">All Lessons</h3>
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <button
                    key={course.id}
                    onClick={() => goToCourse(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      index === currentCourseIndex
                        ? "bg-black text-white"
                        : "bg-white text-gray-600 hover:text-black hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{course.title}</div>
                        <div className={`text-xs mt-1 ${
                          index === currentCourseIndex ? "text-gray-300" : "text-gray-500"
                        }`}>
                          {course.duration}
                        </div>
                      </div>
                      {index === currentCourseIndex && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Main content - Mobile */}
          <main className="max-w-2xl">
            <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
              {currentCourse.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("•")) {
                  const lines = paragraph.split("\n")
                  return (
                    <ul key={index} className="space-y-2 pl-6">
                      {lines.map(
                        (line, lineIndex) =>
                          line.startsWith("•") && (
                            <li key={lineIndex} className="text-lg">
                              {line}
                            </li>
                          ),
                      )}
                    </ul>
                  )
                }
                return (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                )
              })}

              <div className="flex items-center justify-between pt-12 border-t border-gray-100">
                <button
                  onClick={goToPrevious}
                  disabled={currentCourseIndex === 0}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    currentCourseIndex === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-600 hover:text-black underline"
                  }`}
                >
                  ← Previous
                </button>

                <button
                  onClick={goToNext}
                  disabled={currentCourseIndex === courses.length - 1}
                  className={`px-8 py-3 rounded-lg transition-colors ${
                    currentCourseIndex === courses.length - 1
                      ? "text-gray-400 cursor-not-allowed bg-gray-100"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          </main>

          {/* Mobile lessons - Below content */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium text-black mb-6 text-center">All Lessons</h3>
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <button
                    key={course.id}
                    onClick={() => goToCourse(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      index === currentCourseIndex
                        ? "bg-black text-white"
                        : "bg-white text-gray-600 hover:text-black hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{course.title}</div>
                        <div className={`text-sm mt-1 ${
                          index === currentCourseIndex ? "text-gray-300" : "text-gray-500"
                        }`}>
                          {course.duration}
                        </div>
                      </div>
                      {index === currentCourseIndex && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-400">— TinkerHub</p>
        </div>
      </footer>
    </div>
  )
}
