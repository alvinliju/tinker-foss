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
    title: "Introduction to Git",
    duration: "5 min",
    content: `
- **What is Git?**  
  Git is a *distributed version control system*. It keeps track of changes made to files, remembers every version, and allows collaboration.  

- **Why do developers use Git?**  
  - Undo mistakes by going back in history  
  - Work in teams without overwriting each other’s code  
  - Try new ideas safely in separate branches  
  - Share code online via platforms like GitHub  

- **Git vs GitHub:**  
  - **Git** is the tool installed on your computer to track changes.  
  - **GitHub** is a website where Git repositories are hosted and shared online.  
    `,
  },
  {
    id: 2,
    title: "Installing Git and First Setup",
    duration: "5 min",
    content: `
- **Download Git:** [https://git-scm.com/downloads](https://git-scm.com/downloads)  
  Choose the installer for your operating system.  

- **Verify Installation:**  
  Open a terminal (Command Prompt, Powershell, or bash) and type:  
  \`git --version\`  

- **Set your identity (needed for commits):**  
  \`git config --global user.name "Your Name"\`  
  \`git config --global user.email "you@example.com"\`  

- This tells Git who is making changes. Each commit will be tagged with your name and email.  
    `,
  },
  {
    id: 3,
    title: "Creating Your First Repository",
    duration: "4 min",
    content: `
- A *repository (repo)* is like a project folder managed by Git.  

- **Steps:**  
  1. Create a new folder: \`mkdir my-project && cd my-project\`  
  2. Initialize it as a Git repo: \`git init\`  
  3. Git will create a hidden \`.git\` folder that tracks changes.  

- **Check status anytime:**  
  \`git status\` → Shows which files are tracked or untracked.
    `,
  },
  {
    id: 4,
    title: "Staging Changes (git add)",
    duration: "4 min",
    content: `
- Git works in 3 areas:  
  1. **Working Directory** → Your files on disk.  
  2. **Staging Area** → Files you’ve marked for the next commit.  
  3. **Repository** → The permanent history of commits.  

- **Stage a file:**  
  \`git add index.html\`  

- **Stage all files:**  
  \`git add .\`  

- Think of staging as "preparing a basket of changes before saving".
    `,
  },
  {
    id: 5,
    title: "Saving Changes (git commit)",
    duration: "5 min",
    content: `
- A *commit* is like a checkpoint in your project.  

- **Make a commit:**  
  \`git commit -m "Add homepage"\`  

- Each commit has:  
  - A unique ID (hash)  
  - Author name/email  
  - Commit message  
  - Snapshot of changes  

- **Good practice:** Write meaningful messages like "Fix login bug" instead of just "update".  
    `,
  },
  {
    id: 6,
    title: "Viewing History (git log)",
    duration: "4 min",
    content: `
- **See full history:**  
  \`git log\`  

- **Simplified one-line view:**  
  \`git log --oneline\`  

- Shows commit IDs and messages. Useful for finding specific changes.  

- Example:  
  \`a1b2c3 Add homepage\`  
  \`d4e5f6 Fix typo in README\`
    `,
  },
  {
    id: 7,
    title: "Branches Explained",
    duration: "5 min",
    content: `
- A *branch* is like a copy of your project where you can make changes safely.  

- **Main Branch:** Usually called \`main\` (older projects may use \`master\`).  

- **Common Commands:**  
  - Create: \`git branch feature-login\`  
  - Switch: \`git checkout feature-login\`  
  - List: \`git branch\`  

- Branches allow multiple developers to work on features without touching the main code.  
    `,
  },
  {
    id: 8,
    title: "Merging Branches",
    duration: "5 min",
    content: `
- Once your branch is ready, you can merge it into the main branch.  

- **Steps:**  
  1. Switch to main: \`git checkout main\`  
  2. Merge: \`git merge feature-login\`  

- If two people edited the same part of a file, you’ll get a *merge conflict*. Git will mark the file and ask you to decide which version to keep.  

- After resolving, commit again to finish the merge.  
    `,
  },
  {
    id: 9,
    title: "Connecting to Remote Repositories",
    duration: "4 min",
    content: `
- A *remote* is a version of your repo stored online (e.g., GitHub).  

- **Add a remote:**  
  \`git remote add origin https://github.com/username/repo.git\`  

- **Check remotes:**  
  \`git remote -v\`  

- This links your local repo to the GitHub repo.  
    `,
  },
  {
    id: 10,
    title: "Pushing to GitHub",
    duration: "4 min",
    content: `
- After committing locally, send changes to GitHub:  
  \`git push origin main\`  

- First push may require:  
  \`git push -u origin main\` → Sets "origin main" as default.  

- After this, you can just run \`git push\`.  
    `,
  },
  {
    id: 11,
    title: "Pulling Updates",
    duration: "3 min",
    content: `
- If teammates push new commits, you need to update your local repo.  

- **Command:**  
  \`git pull origin main\`  

- This fetches changes from GitHub and merges them into your branch.  
    `,
  },
  {
    id: 12,
    title: "Cloning Repositories",
    duration: "3 min",
    content: `
- To copy an entire GitHub repo to your computer:  

\`git clone https://github.com/username/repo.git\`  

- This creates a local folder with all commits, branches, and files.  
    `,
  },
  {
    id: 13,
    title: "GitHub Basics",
    duration: "5 min",
    content: `
- **GitHub Features:**  
  - Host your repos online  
  - Collaborate with others  
  - Create Issues (track tasks/bugs)  
  - Manage Pull Requests (code reviews)  

- Think of GitHub as a social network for code.  
    `,
  },
  {
    id: 14,
    title: "Pull Requests (PRs)",
    duration: "5 min",
    content: `
- A Pull Request is how you propose changes.  

- **Typical workflow:**  
  1. Create a new branch  
  2. Push branch to GitHub  
  3. Open a Pull Request  
  4. Team reviews changes  
  5. Merge into main branch  

- This ensures clean collaboration and peer review.  
    `,
  },
  {
    id: 15,
    title: "Collaboration Workflow",
    duration: "5 min",
    content: `
- A common GitHub team workflow:  
  1. **Clone** the repo  
  2. **Branch** off main for a new feature  
  3. **Commit** changes locally  
  4. **Push** branch to GitHub  
  5. Open a **Pull Request**  
  6. After approval, **merge** to main  

- This process is called *Feature Branch Workflow*.  
    `,
  },
];

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
