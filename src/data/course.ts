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
    duration: "3 min",
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
    duration: "2 min",
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
    duration: "1 min",
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
    duration: "2 min",
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
