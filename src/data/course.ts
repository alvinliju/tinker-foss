export interface Course {
  id: number
  title: string
  content: string
  duration: string
}

export const courses: Course[] = [
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
  // Add other courses similarly...
]
