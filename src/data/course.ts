export interface Course {
    id: number
    title: string
    content: string
    duration: string
}

export const courses: Course[] = [
    {
        id: 1,
        title: "What is FOSS?",
        duration: "5 min",
        content: `**FOSS = Free and Open Source Software**

"Free" means freedom, not just cost. The Four Essential Freedoms:
• Freedom 0: Run the program for any purpose
• Freedom 1: Study and modify how it works
• Freedom 2: Redistribute copies
• Freedom 3: Share your modifications

**Examples you use daily:**
Linux, Firefox, VLC, WordPress, Android, Git

**Key Benefits:**
- Transparency: See exactly what software does
- Security: Community can audit and fix issues
- Innovation: Build on existing work
- Education: Learn from real production code
- Community: Solve problems together

FOSS powers the internet and represents collaborative value creation over restrictive ownership.`
    },
    {
        id: 2,
        title: "Why Do We Need FOSS?",
        duration: "8 min",
        content: `**Breaking Digital Monopolies**
Proprietary software creates vendor lock-in. FOSS gives you freedom to choose and control your digital tools.

**Security Through Transparency**
Open source allows worldwide security auditing. Vulnerabilities get fixed faster than closed systems.

**Accelerated Innovation**
Developers build on existing work instead of reinventing. AI/ML advanced rapidly once frameworks went open source.

**Educational Value**
Learn from production-quality code. Study how complex systems actually work.

**Economic Benefits**
- Reduced licensing costs
- Faster development
- Shared infrastructure costs
- New business opportunities

**Real Success Stories:**
Apache powers millions of sites, Linux runs 96% of top servers, Git is used universally.

**The Alternative**
Without FOSS: Few companies control all software, innovation slows, your data becomes hostage to profit motives.

FOSS ensures technology serves users, not just shareholders.`
    },
    {
        id: 3,
        title: "How to Start Contributing",
        duration: "10 min",
        content: `**You Don't Need to Be an Expert**
Beginners often provide the most valuable contributions by asking obvious questions and spotting confusing documentation.

**Types of Contributions:**
- **Documentation**: Fix typos, improve guides, add examples
- **Bug Reports**: Report issues with clear steps
- **Code**: Fix bugs, add features, improve performance
- **Design**: UI improvements, graphics, UX testing
- **Community**: Answer questions, help newcomers

**Finding Projects:**
- Start with tools you already use
- Look for "good first issue" labels on GitHub
- Check Up For Grabs or First Timers Only

**Basic Workflow:**
1. Choose a project you find interesting
2. Read README and contribution guidelines
3. Find a beginner-friendly issue
4. Comment on the issue before starting work
5. Fork → Clone → Branch → Code → Test → Commit → Push → PR

**Best Practices:**
- Read contributing guidelines first
- Communicate before making large changes
- Follow existing code style
- Test your changes thoroughly
<<<<<<< HEAD
- Be patient with feedback
=======
- Follow the project's coding standards
  - Write clear commit messages  

**Learn from Feedback:**
- Don't take feedback personally
- View code reviews as learning opportunities
- Ask for clarification if feedback is unclear
- Make requested changes promptly

**Common Beginner Mistakes (And How to Avoid Them)**

**1. Not Reading the Contributing Guidelines**
Every project has specific rules. Always read CONTRIBUTING.md first.

**2. Making Changes Without Discussion**
Large changes should be discussed before implementation.

**3. Ignoring Code Style**
Follow the project's existing patterns and style guides.

**4. Poor Commit Messages**
Write clear, descriptive commit messages that explain the "why."

**5. Not Testing Changes**
Always test your changes and run existing tests.

**Building Your FOSS Resume**

**Document Your Journey:**
- Keep a list of your contributions
- Write blog posts about what you learned
- Share your experiences on social media
- Speak at meetups about your FOSS journey

**Networking:**
- Connect with other contributors
- Join project communities (Discord, Slack, IRC)
- Attend FOSS conferences and meetups
- Follow maintainers and contributors on social media
>>>>>>> a241c72180ebe7063bd39b4ec3ace7a2314ca16e

**Your First Contribution Checklist:**
□ Find an interesting project
□ Read all documentation
□ Set up development environment
□ Find beginner-friendly issue
□ Communicate with maintainers
□ Make and test changes
□ Submit clear pull request
□ Respond to feedback professionally

Every expert was once a beginner. Your first contribution doesn't need to be perfect—it just needs to be a start.`
    },
    {
        id: 4,
        title: "Analyzing Codebases Efficiently",
        duration: "8 min",
        content: `**The 80/20 Rule**
20% of code handles 80% of functionality. Find that critical 20% first.

**Layered Analysis Approach:**

**Layer 1: Overview (10 min)**
- README.md: What does it do?
- package.json: What dependencies?
- Directory structure: How organized?
- LICENSE: How can you use it?

**Layer 2: Architecture (30 min)**
- Entry points: index.html, main.js
- Configuration files
- Tests (often best documentation)
- Documentation folders

**Layer 3: Code Flow (1-2 hours)**
- Start from entry point
- Follow execution path
- Identify main data structures
- Understand core business logic

**Practical Techniques:**

**Grep-First Strategy:**
    grep -r "function main|class Main" .
    grep -r "config|settings" .
    grep -r "addEventListener|onclick" .

**HTML-First for Web Projects:**
- Start with main HTML file
- Follow linked CSS/JS files
- Use browser DevTools extensively

**When Overwhelmed:**
- Take breaks
- Draw diagrams
- Focus on your specific goal
- Ask questions in issues/forums

**Common Web Patterns:**
- Static sites: HTML + CSS + JS files
- SPAs: One HTML, dynamic JS routing
- Multi-page: Multiple HTML files

Remember: Understanding takes time. Build a mental model gradually, one component at a time.`
    },
    {
        id: 5,
        title: "Black Box Problem-Solving",
        duration: "8 min",
        content: `**Black Box Concept**
Focus on what goes IN and what comes OUT, ignore internal implementation until needed.

**Why It's Powerful:**
- Reduces cognitive load
- Enables abstraction
- Breaks problems into manageable pieces

**Black Box Strategy:**
1. **Identify Problem Boundary**: What exactly needs fixing?
2. **Find Responsible Component**: Which part handles this?
3. **Understand Interface**: What inputs/outputs?
4. **Test the Box**: Can you reproduce the issue?
5. **Fix Within Box**: Keep changes isolated

**Example: Fixing Email Validation**
- Don't understand entire codebase
- Find form validation component
- Understand its inputs (form data) and outputs (valid/invalid)
- Focus only on email validation logic

**When to Open the Black Box:**
- Performance issues
- Complex bugs spanning components
- Learning/growth opportunities
- Major architectural changes

**Best Practices:**
- Design clear interfaces
- Maintain single responsibility
- Write comprehensive tests
- Document behavior

**Think in Layers**: Complex systems are built from simpler black boxes. Master this approach and even the largest codebases become manageable.`
    },
    {
        id: 6,
        title: "Git and GitHub Essentials",
        duration: "12 min",
        content: `**Git vs GitHub**
- **Git**: Version control system (local)
- **GitHub**: Collaboration platform (online)

**FOSS Workflow (Fork-and-Pull):**
1. **Fork** on GitHub
2. **Clone** your fork locally
3. **Add upstream** remote
4. **Create branch** for your work
5. **Make changes** and commit
6. **Push** to your fork
7. **Create Pull Request**

**Essential Commands:**
    # Setup
    git clone https://github.com/YOUR_USERNAME/PROJECT.git
    git remote add upstream https://github.com/ORIGINAL/PROJECT.git
    
    # Daily workflow
    git checkout -b feature/my-feature
    git add .
    git commit -m "Clear commit message"
    git push origin feature/my-feature
    
    # Stay updated
    git fetch upstream
    git merge upstream/main

**Good Commit Messages:**
    Fix email validation in contact form
    
    - Add proper email regex validation
    - Show error messages for invalid emails
    - Add visual feedback with red border
    
    Fixes #123

**Branch Naming:**
- feature/dark-mode
- fix/contact-form
- docs/readme-update

**PR Best Practices:**
- Clear title and description
- Reference related issues
- Include screenshots for UI changes
- Respond to feedback promptly

**Common Mistakes:**
- Not reading contribution guidelines
- Making changes without discussion
- Poor commit messages
- Not testing changes

**GitHub CLI Power Tips:**
    gh pr create --title "Fix bug" --body "Description"
    gh pr checkout 123
    gh issue create --title "Bug report"

Your first contribution is just a few Git commands away!`
    },
    {
        id: 7,
        title: "Hands-On: TinkerHub Meme Generator",
        duration: "15 min",
        content: `**About the Project**
TinkerHub's Simple Meme Generator: beginner-friendly HTML/CSS/JavaScript project for learning web development through humor.

**Why Perfect for Beginners:**
- No complex setup (just open index.html)
- Familiar technologies (HTML/CSS/JS)
- Welcoming community with mentors
- Diverse contribution opportunities

**Getting Started:** \n
    # Fork and clone

    git clone https://github.com/YOUR_USERNAME/foss-flip.git \n
    cd foss-flip \n
    git remote add upstream https://github.com/JakeOJeff/foss-flip.git \n
    
    Open "index.html" File

**Project Structure:**
    index.html           # Main HTML file
    styles/main.css      # Styling
    scripts/app.js       # JavaScript logic
    assets/templates/    # Meme templates
    tests/               # Simple tests

**Beginner-Friendly Tasks:**
- Add dark mode toggle
- Improve mobile responsiveness
- Create new meme templates
- Add download functionality
- Implement meme sharing
- Write documentation
- Add accessibility features

**Example: Random Template Button**

HTML:
    
    # index.html
    <button id="randomTemplateBtn" class="btn">
      🎲 Random Template
    </button>

CSS:

    # application.css
    .btn {
      padding: 0.75rem 1.5rem;
      background: #6c757d;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

JavaScript:

    # index.js
    document.getElementById('randomTemplateBtn').addEventListener('click', function() {
        const templates = document.querySelectorAll('.template-option');
        const random = templates[Math.floor(Math.random() * templates.length)];
        random.click();
        
        this.innerHTML = '🎉 Selected!';
        setTimeout(() => this.innerHTML = '🎲 Random Template', 2000);
    });

**Commit and PR:**
    git add .
    git commit -m "Add random template selection feature
    
    - Add random template button with hover effects
    - Implement JavaScript logic for random selection
    - Include visual feedback when clicked
    
    Fixes #142"
    
    git push origin feature/random-template

Create PR with clear description, screenshots, and testing notes.`
    },
    {
        id: 8,
        title: "Your FOSS Journey Starts Now",
        duration: "3 min",
        content: `**You're Ready!**
You now have the foundation to contribute meaningfully to FOSS projects. The TinkerHub Simple Meme Generator is your perfect starting point.

**Key Takeaways:**
- **Start Small**: Your first contribution doesn't need to be revolutionary
- **Ask Questions**: The community wants to help you succeed
- **Be Patient**: Good software takes time and iteration
- **Have Fun**: You're building something people will actually use

**Your Next Steps:**
1. Pick a beginner-friendly issue from the meme generator
2. Set up your development environment
3. Make your first contribution
4. Engage with the community
5. Keep learning and growing

**Remember:**
- Every expert was once a beginner
- Your perspective and ideas matter
- Small contributions make a big difference
- The community is here to support you

**The FOSS Philosophy:**
Technology should empower users, not restrict them. By contributing to FOSS, you're building a more open, collaborative, and equitable digital world.

Welcome to the community. Your journey from FOSS learner to FOSS contributor starts with a single pull request.

**Make it today!** 🚀

*The world of Free and Open Source Software is waiting for your unique contributions.*`
    }
];