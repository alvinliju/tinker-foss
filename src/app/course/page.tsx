"use client"

import { useState } from "react"

interface Course {
  id: number
  title: string
  content: string
  duration: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    duration: "15 min",
    content: `Welcome to the world of web development! In this foundational course, you'll learn the essential building blocks that power the modern web.

Web development is the art and science of creating websites and web applications that millions of people use every day. From simple landing pages to complex interactive applications, web development encompasses a vast landscape of technologies and possibilities.

In this course, we'll explore:
• The fundamental technologies: HTML, CSS, and JavaScript
• How browsers work and interpret code
• The difference between frontend and backend development
• Modern development tools and workflows
• Best practices for writing clean, maintainable code

Whether you're a complete beginner or looking to refresh your knowledge, this course will give you the solid foundation you need to start building for the web.

The journey of a thousand websites begins with a single line of code. Let's write that first line together.`,
  },
  {
    id: 2,
    title: "HTML Fundamentals",
    duration: "20 min",
    content: `HTML (HyperText Markup Language) is the backbone of every website. It's the language that structures content on the web, defining everything from headings and paragraphs to images and links.

Think of HTML as the skeleton of a webpage. Just as your skeleton gives structure to your body, HTML gives structure to web content. Every webpage you've ever visited started with HTML.

Key concepts we'll cover:
• Understanding HTML elements and tags
• Document structure and semantic markup
• Working with text, links, and media
• Forms and user input
• Accessibility best practices

HTML might seem simple at first glance, but mastering semantic markup is crucial for creating websites that are accessible, SEO-friendly, and maintainable.

By the end of this section, you'll understand how to structure content in a way that both browsers and humans can easily understand and navigate.

Remember: good HTML is the foundation of good web development. Master this, and everything else becomes easier.`,
  },
  {
    id: 3,
    title: "CSS Styling & Design",
    duration: "25 min",
    content: `CSS (Cascading Style Sheets) is where your websites come to life visually. If HTML is the skeleton, CSS is the skin, clothes, and makeup that makes everything beautiful and engaging.

CSS transforms plain HTML documents into stunning, interactive experiences. It controls everything from colors and fonts to layouts and animations.

What you'll master in this section:
• CSS selectors and the cascade
• Box model and layout fundamentals
• Flexbox and Grid for modern layouts
• Responsive design principles
• Colors, typography, and visual hierarchy
• Transitions and basic animations

Modern CSS is incredibly powerful. With features like Flexbox and Grid, you can create complex layouts that were once impossible or required hacky workarounds.

The key to great CSS is understanding that it's not just about making things look pretty—it's about creating intuitive, accessible user experiences that work across all devices and screen sizes.

Design is not just what it looks like and feels like. Design is how it works. Let's make it work beautifully.`,
  },
  {
    id: 4,
    title: "JavaScript Interactivity",
    duration: "30 min",
    content: `JavaScript is the programming language of the web. It's what makes websites interactive, dynamic, and responsive to user actions. Without JavaScript, the web would be a collection of static documents.

JavaScript transforms static HTML and CSS into living, breathing applications. It handles user interactions, manipulates content in real-time, and communicates with servers to fetch and send data.

Core JavaScript concepts:
• Variables, functions, and control structures
• DOM manipulation and event handling
• Asynchronous programming with promises
• Modern ES6+ features and syntax
• Error handling and debugging techniques
• Working with APIs and external data

JavaScript has evolved tremendously over the years. What started as a simple scripting language is now a powerful, versatile language that runs not just in browsers, but on servers, mobile devices, and even desktop applications.

The beauty of JavaScript lies in its flexibility and ubiquity. Once you learn JavaScript, you can build almost anything—web apps, mobile apps, server applications, and more.

Today, JavaScript powers the interactive web. Tomorrow, it might power your entire career.`,
  },
  {
    id: 5,
    title: "Building Your First Project",
    duration: "35 min",
    content: `Congratulations! You've learned the fundamentals of web development. Now it's time to put everything together and build something real.

In this final section, we'll combine HTML, CSS, and JavaScript to create a complete project from scratch. This is where theory meets practice, and where you'll truly understand how all the pieces fit together.

Your project journey:
• Planning and wireframing your application
• Setting up your development environment
• Building the HTML structure
• Styling with CSS for a professional look
• Adding interactivity with JavaScript
• Testing across different browsers and devices
• Deploying your project to the web

Building projects is the best way to solidify your learning. Each project teaches you something new and builds your confidence as a developer.

Don't worry about making it perfect—your first project won't be your last. The goal is to complete something, learn from the process, and use that knowledge to build something even better next time.

Remember: every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown. The difference is that they started, and more importantly, they finished.

Your journey as a web developer starts now. Let's build something amazing together.`,
  },
]

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
