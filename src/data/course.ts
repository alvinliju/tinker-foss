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
        duration: "12 min",
        content: `Welcome to the world of Free and Open Source Software (FOSS)! This journey will transform how you think about technology, collaboration, and building software that truly serves humanity.

**What does FOSS mean?**

FOSS stands for "Free and Open Source Software." But "free" here doesn't just mean free of cost—it means freedom. The freedom to use, study, modify, and distribute software without restrictions.

**The Four Essential Freedoms:**
• Freedom 0: The freedom to run the program for any purpose
• Freedom 1: The freedom to study how the program works and change it
• Freedom 2: The freedom to redistribute copies so you can help others
• Freedom 3: The freedom to distribute copies of your modified versions

**Examples of FOSS you use daily:**
• Linux - The operating system that powers most web servers
• Firefox - The web browser built by a community
• VLC Media Player - Plays virtually any media format
• WordPress - Powers 40% of all websites
• Android - Built on the Linux kernel
• Git - The version control system created by Linus Torvalds

**FOSS vs Proprietary Software:**

Imagine software as a recipe. With proprietary software, you get the meal but never the recipe. You can't modify it, improve it, or share it. With FOSS, you get both the meal AND the recipe—you can cook it yourself, modify it, and share your improvements with the world.

**The Philosophy Behind FOSS:**

FOSS is built on the belief that software should empower users, not restrict them. It's about:
- Transparency: You can see exactly what the software does
- Security: Thousands of eyes make bugs shallow
- Innovation: Building on each other's work accelerates progress
- Education: Learning from real-world, production code
- Community: Solving problems together

**Real-World Impact:**

FOSS powers the internet. Google, Facebook, Netflix, and virtually every major tech company run on FOSS infrastructure. The International Space Station runs Linux. Your smartphone, your router, your smart TV—they're all powered by FOSS.

But beyond technology, FOSS represents a different way of creating value—through collaboration, sharing knowledge, and building commons that benefit everyone.

This isn't just about code. It's about creating a more open, collaborative, and equitable digital world. And you're about to become part of that movement.`
    },
    {
        id: 2,
        title: "Why Do We Need FOSS?",
        duration: "15 min",
        content: `Understanding why FOSS matters is crucial for any developer in today's world. Let's explore the compelling reasons why FOSS isn't just nice to have—it's essential for the future of technology.

**1. Breaking Down Digital Monopolies**

Proprietary software creates vendor lock-in. Once you're dependent on a company's software, they control your digital life. They can:
- Raise prices arbitrarily
- Discontinue products you depend on
- Add unwanted features or remove loved ones
- Collect your data without transparency

FOSS breaks these chains. With FOSS, you're never trapped by a single vendor's decisions.

**2. Security Through Transparency**

"Security through obscurity" is a myth. Real security comes from transparency:
- Open source code can be audited by security experts worldwide
- Vulnerabilities are found and fixed faster
- No hidden backdoors or surveillance features
- You know exactly what your software is doing

Example: When the Heartbleed bug was discovered in OpenSSL, the entire community rallied to fix it within days. With proprietary software, you might never know such vulnerabilities exist.

**3. Innovation and Rapid Development**

FOSS accelerates innovation by:
- Allowing developers to build on existing work
- Preventing duplicate efforts across companies
- Creating standards that everyone can implement
- Enabling rapid prototyping and experimentation

Consider how quickly AI and machine learning advanced once frameworks like TensorFlow, PyTorch, and scikit-learn became open source.

**4. Educational Value**

FOSS is the world's largest computer science classroom:
- Learn from production-quality code
- Understand how complex systems work
- See best practices in action
- Study different architectural approaches

You can't learn to cook by only eating at restaurants. Similarly, you can't become a great developer without reading and understanding real code.

**5. Economic Benefits**

FOSS creates economic value through:
- Reduced software licensing costs
- Faster time-to-market for products
- Shared development costs across organizations
- Creation of new business models and opportunities

Companies like Red Hat, Canonical, and MongoDB have built billion-dollar businesses around FOSS.

**6. Digital Sovereignty**

Countries and organizations need control over their digital infrastructure:
- Governments can't rely on foreign companies for critical systems
- Organizations need software that meets their specific needs
- Communities can adapt software to their local requirements

**7. Sustainability and Longevity**

FOSS projects can outlive their original creators:
- No single point of failure
- Community can continue development
- Code remains useful even if company fails
- Prevents software from becoming obsolete due to business decisions

**8. Ethical Technology Development**

FOSS promotes ethical technology by:
- Ensuring transparency in algorithmic decision-making
- Preventing discriminatory or biased software
- Giving users control over their digital tools
- Creating technology that serves users, not just profits

**The Network Effect**

The more people use and contribute to FOSS, the better it becomes. This creates a positive feedback loop:
- More users → More bug reports → Better software
- More contributors → More features → More users
- More adoption → More investment → Better ecosystem

**Real-World Success Stories:**

• **Apache Web Server**: Powers millions of websites
• **Linux**: Runs 96% of the world's top 1 million servers
• **Git**: Used by virtually every software development team
• **Kubernetes**: Revolutionized how we deploy and manage applications
• **React**: Created by Facebook, now used by millions of developers

**The Alternative is Frightening**

Imagine a world where:
- A few companies control all software
- You can't fix bugs in software you use daily
- Innovation happens only within corporate walls
- Your data and privacy are at the mercy of profit motives

That's the world without FOSS. That's why we need it—not just as developers, but as digital citizens who want a free and open internet.

FOSS isn't just about software. It's about freedom, innovation, and building a better digital future for everyone.`
    },
    {
        id: 3,
        title: "How to Start Contributing to FOSS",
        duration: "20 min",
        content: `Ready to join the global community of FOSS contributors? This lesson will guide you through your first steps into the exciting world of open source contribution.

**Myth Busting: You Don't Need to Be an Expert**

Many developers think they need to be coding wizards to contribute to FOSS. This is completely false! Some of the most valuable contributions come from beginners who:
- Ask questions that experts take for granted
- Spot confusing documentation
- Find bugs in common use cases
- Bring fresh perspectives to old problems

**Types of Contributions (It's Not Just Code!)**

**1. Documentation**
- Fix typos and grammar errors
- Improve installation instructions
- Add examples and tutorials
- Translate documentation to other languages

**2. Bug Reports**
- Report issues you encounter
- Provide detailed reproduction steps
- Test and verify bug fixes

**3. Code Contributions**
- Fix bugs
- Add new features
- Improve performance
- Refactor and clean up code

**4. Design and UX**
- Improve user interfaces
- Create logos and graphics
- Design better user experiences
- Conduct usability testing

**5. Community Support**
- Answer questions on forums
- Help newcomers get started
- Moderate discussions
- Organize events and meetups

**6. Testing**
- Test new releases
- Write automated tests
- Test on different platforms
- Performance testing

**Finding Your First Project**

**Start Small and Local:**
- Look for projects you already use
- Check if your favorite tools have open source alternatives
- Search for projects in your preferred programming language

**Great Platforms for Beginners:**
- GitHub: Search for "good first issue" or "beginner friendly"
- GitLab: Similar labeling system
- Up For Grabs: Curated list of beginner-friendly projects
- First Timers Only: Projects specifically for first-time contributors

**Red Flags to Avoid:**
- Projects with no recent activity
- Maintainers who are rude or dismissive
- Projects without clear contribution guidelines
- Codebases without any tests or documentation

**The FOSS Contribution Workflow**

**Step 1: Choose Your Project**
Research the project thoroughly:
- Read the README and documentation
- Check the issue tracker
- Look at recent pull requests
- Understand the project's goals and values

**Step 2: Set Up Your Environment**
- Fork the repository
- Clone your fork locally
- Set up the development environment
- Run the tests to ensure everything works

**Step 3: Find an Issue**
Look for issues labeled:
- "good first issue"
- "beginner friendly"
- "help wanted"
- "documentation"

**Step 4: Communicate First**
- Comment on the issue expressing interest
- Ask questions if anything is unclear
- Propose your approach before starting work
- Wait for maintainer feedback

**Step 5: Make Your Contribution**
- Create a new branch for your work
- Make your changes following the project's style guide
- Write tests if applicable
- Update documentation if needed

**Step 6: Submit Your Pull Request**
- Write a clear title and description
- Reference the issue you're solving
- Explain what you changed and why
- Be prepared to make revisions based on feedback

**Best Practices for New Contributors**

**Communication is Key:**
- Be respectful and patient
- Ask questions when stuck
- Provide context in your communications
- Thank maintainers for their time

**Quality Over Quantity:**
- Focus on making one good contribution rather than many poor ones
- Test your changes thoroughly
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

**Your First Contribution Checklist:**

□ Choose a project you use or find interesting
□ Read all documentation and contribution guidelines
□ Set up the development environment successfully
□ Find a beginner-friendly issue
□ Communicate with maintainers before starting work
□ Make your changes following project standards
□ Test your changes thoroughly
□ Submit a clear, well-documented pull request
□ Respond to feedback professionally and promptly
□ Celebrate your first merged contribution! 🎉

**Remember: Every Expert Was Once a Beginner**

The maintainers of major FOSS projects were once exactly where you are now. They made their first nervous pull request, worried about making mistakes, and learned through practice and community support.

Your journey into FOSS starts with a single contribution. It doesn't have to be perfect—it just has to be a start.

The open source community is waiting to welcome you. Take that first step!`
    },
    {
        id: 4,
        title: "Analyzing Codebases Without Overwhelming Yourself",
        duration: "18 min",
        content: `Diving into a large, unfamiliar codebase can feel like trying to drink from a fire hose. This lesson will teach you systematic approaches to understand any codebase efficiently without getting overwhelmed.

**The Codebase Analysis Mindset**

**Think Like a Detective, Not a Scholar**
You don't need to understand every line of code. You need to understand:
- What the software does (high-level purpose)
- How it's organized (architecture)
- Where specific functionality lives
- How to make targeted changes

**The 80/20 Rule Applies**
In most codebases:
- 20% of the code handles 80% of the functionality
- 80% of bugs come from 20% of the code
- 20% of the files contain 80% of the business logic

Focus on finding that critical 20% first.

**The Layered Approach to Code Analysis**

**Layer 1: The Bird's Eye View (10 minutes)**

Start with these files in order:
1. **README.md** - What does this project do?
2. **package.json/requirements.txt/Cargo.toml** - What dependencies does it use?
3. **Directory structure** - How is the code organized?
4. **.gitignore** - What files are ignored (tells you about build artifacts)?
5. **LICENSE** - How can you use this code?

**Layer 2: Architecture Understanding (30 minutes)**

Look for these architectural clues:
- **Entry points**: index.html, main.js, app.js, script.js
- **Configuration files**: config/, .env.example, settings.js
- **Tests directory**: Often the best documentation of how code works
- **Documentation folder**: docs/, wiki/, or inline comments

**Layer 3: Code Flow Analysis (1-2 hours)**

Now dive into the actual code:
- Start from the entry point (usually index.html)
- Follow the execution path for a simple operation
- Identify the main data structures
- Understand the core business logic

**Practical Analysis Techniques**

**1. The Grep-First Strategy**

Before reading code, search for:

    # Find main functions or classes
    grep -r "function main|class Main|document" .

    # Find configuration
    grep -r "config|settings|API" .

    # Find event handlers
    grep -r "addEventListener|onclick|submit" .

    # Find error handling
    grep -r "try|catch|error" .

**2. The HTML-First Exploration**

For web projects, start with HTML:
- Find the main HTML file (usually index.html)
- Look at the structure and identify key sections
- Find linked CSS and JavaScript files
- Understand the page flow and navigation

**3. The Browser DevTools Method**

Use browser developer tools:
- Open the project in your browser
- Use "View Source" to see the HTML structure
- Check the Network tab to see what files are loaded
- Use the Console to interact with JavaScript
- Inspect elements to understand CSS styling

**4. The Dependency Analysis**

Understanding dependencies reveals architecture:
- **jQuery** → Older JavaScript project with DOM manipulation
- **React/Vue/Angular** → Modern frontend framework
- **Bootstrap/Tailwind** → CSS framework for styling
- **Chart.js/D3** → Data visualization
- **Express** → Node.js web server

**Tools for Code Analysis**

**Browser Features:**
- **View Source**: See the raw HTML and linked files
- **Developer Tools**: Inspect elements, debug JavaScript, view network requests
- **Extensions**: Web Developer tools, React DevTools

**Code Editors:**
- **VS Code**: Great for exploring file structures
- **File Explorer**: Understand directory organization
- **Search**: Find specific functions or variables
- **Go to Definition**: Follow function calls

**Online Tools:**
- **GitHub's code navigation**: Click through code online
- **CodePen/JSFiddle**: Test small code snippets
- **Can I Use**: Check browser compatibility

**The Component-First Strategy**

Instead of reading linearly, identify components:

**1. Identify the Layers:**
- Presentation layer (HTML, CSS)
- Interaction layer (JavaScript event handlers)
- Data layer (API calls, local storage)

**2. Map the Components:**
- Navigation menu
- User interface elements
- Form handling
- Data display
- External integrations

**3. Trace User Journeys:**
- How does a user navigate the site?
- What happens when they click a button?
- How does data flow through the application?

**Dealing with Overwhelming Complexity**

**When You Feel Lost:**

**Take Breaks**: Your brain needs time to process complex information.

**Draw Diagrams**: Visual representations help understand relationships.

**Ask Questions**: Use GitHub issues, Discord, or Stack Overflow.

**Focus on Your Goal**: Remember why you're analyzing this code.

**Start Small**: Pick one tiny feature to understand completely.

**Common Web Project Patterns to Recognize**

**Static Website:**
- HTML files with CSS and JavaScript
- No server-side processing
- Files served directly to browser

**Single Page Application (SPA):**
- One main HTML file
- JavaScript handles routing and content
- Dynamic content loading

**Multi-Page Application:**
- Multiple HTML files
- Server-side or static generation
- Traditional page navigation

**Progressive Web App (PWA):**
- Service workers for offline functionality
- Manifest file for app-like behavior
- Responsive design

**The Documentation Strategy**

As you learn, document your findings:

**Create a Mental Map:**
- Key files and their purposes
- Important functions and their roles
- Data flow diagrams
- Configuration options

**Write Down Questions:**
- What does this function do?
- Why is this code structured this way?
- What happens if this fails?

**Track Your Progress:**
- What you've understood
- What you're still confused about
- What you need to research further

**Red Flags: When to Ask for Help**

**Technical Red Flags:**
- No documentation or README
- No comments in code
- Extremely long functions (>100 lines)
- Deeply nested code (>5 levels)
- No clear entry point

**Process Red Flags:**
- No response to issues or pull requests
- Hostile or dismissive maintainers
- No contribution guidelines
- Inconsistent code style

**Your Analysis Toolkit Checklist:**

□ Start with README and high-level documentation
□ Understand the project structure and dependencies
□ Identify the main entry points and execution flow
□ Use browser DevTools as your debugging companion
□ Search for keywords related to your interests
□ Draw diagrams to visualize relationships
□ Focus on one component at a time
□ Document your findings as you go
□ Don't hesitate to ask questions
□ Take breaks when feeling overwhelmed

**Remember: Understanding Takes Time**

Even experienced developers need time to understand new codebases. The goal isn't to understand everything immediately—it's to build a mental model that you can expand over time.

Every codebase tells a story. Your job is to become a good reader of that story, one chapter at a time.`
    },
    {
        id: 5,
        title: "The Black Box Concept and Problem-Solving",
        duration: "16 min",
        content: `The black box concept is one of the most powerful problem-solving tools in software development. Master this approach, and you'll be able to tackle complex problems without getting lost in unnecessary details.

**What is the Black Box Concept?**

Imagine a box where you can see what goes in and what comes out, but you don't need to know what happens inside. That's a black box:

- **Input**: What data or parameters go in
- **Output**: What results come out  
- **Interface**: How you interact with it
- **Implementation**: The internal workings (which you ignore for now)

**Why Black Box Thinking is Powerful**

**1. Reduces Cognitive Load**
Instead of trying to understand everything at once, you focus on:
- What does this component do?
- How do I use it?
- What can I expect from it?

**2. Enables Abstraction**
You can use complex systems without understanding every detail:
- Use a database without knowing disk storage algorithms
- Call an API without knowing server implementation
- Use a library without reading all its source code

**3. Facilitates Problem Decomposition**
Break large problems into smaller black boxes:
- Each box has a clear responsibility
- Boxes can be developed and tested independently
- Complex systems become manageable

**Black Box Thinking in Web Development**

**Example 1: Using a JavaScript Library**

    // Black box thinking
    const result = jQuery('#myElement').fadeOut();
    // Input: CSS selector and animation method
    // Output: animated element
    // I don't need to know how jQuery implements animations internally

**Example 2: Using a Web API**

    // Black box thinking
    fetch('/api/users')
      .then(response => response.json())
      .then(users => displayUsers(users));
    // Input: API endpoint
    // Output: user data
    // I don't need to know server implementation or database queries

**Example 3: HTML Form Handling**

    <!-- Black box thinking -->
    <form action="/submit" method="POST">
      <input type="text" name="username">
      <button type="submit">Submit</button>
    </form>
    <!-- Input: user form data -->
    <!-- Output: form submission to server -->
    <!-- I don't need to know HTTP protocol details -->

**Applying Black Box Thinking to FOSS Contribution**

**1. Finding the Right Black Box**

When you want to fix a bug or add a feature:
- Don't try to understand the entire codebase
- Find the specific component (black box) responsible
- Focus on its inputs, outputs, and interface

**Example**: Adding email validation to a contact form
- Find the form validation black box
- Understand its input (form data) and output (valid/invalid)
- Focus only on the email validation logic within that box

**2. Testing Black Boxes**

Write tests that treat components as black boxes:

    // Test the contact form validation black box
    function testEmailValidation() {
        // Input
        const formData = { email: "test@example.com", message: "Hello" };
        
        // Black box operation
        const result = validateForm(formData);
        
        // Expected output
        assert(result.isValid === true);
        assert(result.errors.length === 0);
    }

**3. Designing New Black Boxes**

When adding new features, design them as black boxes:
- Clear, single responsibility
- Well-defined inputs and outputs
- Minimal dependencies on other components

**Black Box Problem-Solving Strategy**

**Step 1: Identify the Problem Boundary**
- What exactly needs to be solved?
- What are the inputs and expected outputs?
- What should NOT be changed?

**Step 2: Find the Responsible Black Box**
- Which component handles this functionality?
- Where does the problem likely occur?
- What's the smallest unit that could contain the issue?

**Step 3: Understand the Black Box Interface**
- What parameters does it accept?
- What does it return?
- What are the expected behaviors?
- What error conditions exist?

**Step 4: Test the Black Box**
- Can you reproduce the problem?
- What inputs cause the issue?
- What outputs are you getting vs. expecting?

**Step 5: Fix Within the Black Box**
- Make changes only within the identified component
- Don't modify the interface unless absolutely necessary
- Ensure the fix doesn't break other functionality

**Common Black Box Patterns in Web Development**

**1. Function Level**

    function calculateTotal(items, taxRate) {
        // Black box: tax calculation logic
        return items.reduce((sum, item) => sum + item.price, 0) * (1 + taxRate);
    }

**2. Module Level**

    // utils.js - Black box: utility functions
    export function formatDate(date) { /* implementation */ }
    export function validateEmail(email) { /* implementation */ }

**3. Component Level**

    <!-- Navigation component - Black box -->
    <nav class="navigation">
        <!-- Internal structure hidden from users -->
    </nav>

**4. Service Level**

    // API service - Black box
    class UserService {
        async getUser(id) { /* implementation */ }
        async updateUser(id, data) { /* implementation */ }
    }

**Black Box Debugging Techniques**

**1. Input-Output Analysis**
- Log all inputs to the black box
- Log all outputs from the black box
- Compare expected vs. actual outputs

**2. Boundary Testing**
- Test with minimum values
- Test with maximum values
- Test with invalid inputs
- Test edge cases

**3. State Analysis**
- What state does the black box expect?
- What state does it produce?
- Are there side effects?

**4. Dependency Isolation**
- Mock external dependencies
- Test the black box in isolation
- Verify it works without external factors

**When to Open the Black Box**

Sometimes you need to look inside:

**Performance Issues**
- The black box is too slow
- Need to optimize internal algorithms
- Memory usage is too high

**Complex Bugs**
- The problem spans multiple components
- The interface behavior is inconsistent
- Need to understand internal state

**Learning and Growth**
- Want to understand how something works
- Need to modify internal behavior
- Contributing to the component itself

**Architectural Changes**
- Need to split the black box into smaller pieces
- Changing the interface design
- Integrating with new systems

**Black Box Best Practices**

**1. Design Clear Interfaces**
- Use descriptive names
- Document expected inputs and outputs
- Handle errors gracefully
- Provide meaningful error messages

**2. Maintain Single Responsibility**
- Each black box should do one thing well
- Avoid mixing different concerns
- Keep interfaces simple

**3. Write Comprehensive Tests**
- Test all public interfaces
- Cover edge cases and error conditions
- Use tests as documentation

**4. Document Behavior**
- Explain what the black box does
- Document any side effects
- Provide usage examples

**Real-World Example: Contributing to a Todo App**

Let's say you want to add a "Mark All Complete" feature to a todo app:

**1. Identify the Black Box**: Todo list management
**2. Understand the Interface**: 
   - Input: Array of todo items
   - Output: Updated array with all items marked complete
**3. Design the Solution**: "Mark All Complete" function black box
   - Input: Todo list + "mark all" action
   - Output: Updated todo list
**4. Implement**: Focus only on the marking logic
**5. Test**: Verify all todos are marked correctly

You don't need to understand:
- How todos are stored in the database
- How the UI renders the todo list
- How other features work
- How the web server handles requests

**The Black Box Mindset**

**Think in Layers**: Every complex system is built from simpler black boxes.

**Focus on Contracts**: Understand what each component promises to do.

**Embrace Abstraction**: You don't need to understand everything to use everything.

**Start Small**: Begin with the smallest black box that could solve your problem.

**Test Interfaces**: Verify that black boxes work as expected.

The black box concept isn't about avoiding complexity—it's about managing complexity intelligently. By thinking in terms of black boxes, you can contribute to FOSS projects much more effectively, solving problems without getting overwhelmed by implementation details.

Master this approach, and you'll find that even the most complex codebases become navigable and manageable.`
    },
    {
        id: 6,
        title: "Using GitHub and Git for FOSS",
        duration: "22 min",
        content: `Git and GitHub are the backbone of modern FOSS development. This lesson will teach you not just the commands, but the workflows, etiquette, and best practices that make you an effective FOSS contributor.

**Git vs GitHub: Understanding the Difference**

**Git**: The version control system
- Tracks changes in your code over time
- Works locally on your computer
- Created by Linus Torvalds for Linux development

**GitHub**: The collaboration platform
- Hosts Git repositories online
- Provides tools for collaboration (issues, pull requests, wikis)
- Adds social features (following, starring, discussions)

**The FOSS Git Workflow**

**The Fork-and-Pull Model**

This is the standard workflow for contributing to FOSS projects:

    Original Repository (upstream)
            ↓ (fork)
    Your Fork on GitHub (origin)
            ↓ (clone)
    Your Local Repository
            ↓ (push)
    Your Fork on GitHub
            ↓ (pull request)
    Original Repository

**Step-by-Step FOSS Contribution Workflow**

**1. Fork the Repository**
    # On GitHub, click the "Fork" button
    # This creates your own copy of the repository

**2. Clone Your Fork**
    git clone https://github.com/YOUR_USERNAME/PROJECT_NAME.git
    cd PROJECT_NAME

**3. Add Upstream Remote**
    # This connects you to the original repository
    git remote add upstream https://github.com/ORIGINAL_OWNER/PROJECT_NAME.git

    # Verify your remotes
    git remote -v
    # origin    https://github.com/YOUR_USERNAME/PROJECT_NAME.git (fetch)
    # origin    https://github.com/YOUR_USERNAME/PROJECT_NAME.git (push)
    # upstream  https://github.com/ORIGINAL_OWNER/PROJECT_NAME.git (fetch)
    # upstream  https://github.com/ORIGINAL_OWNER/PROJECT_NAME.git (push)

**4. Create a Feature Branch**
    # Always create a new branch for your work
    git checkout -b fix-contact-form

    # Branch naming conventions:
    # feature/add-dark-mode
    # fix/contact-form-validation
    # docs/update-readme
    # style/improve-mobile-layout

**5. Make Your Changes**
    # Edit files, add features, fix bugs
    # Test your changes thoroughly

    # Check what files you've modified
    git status

    # See the specific changes
    git diff

**6. Commit Your Changes**
    # Stage your changes
    git add .

    # Or stage specific files
    git add index.html style.css script.js

    # Commit with a descriptive message
    git commit -m "Fix contact form validation for email field

    - Add proper email regex validation
    - Show error message for invalid emails
    - Add visual feedback with red border
    - Test with various email formats

    Fixes #123"

**7. Keep Your Branch Updated**
    # Fetch latest changes from upstream
    git fetch upstream

    # Merge upstream changes into your branch
    git merge upstream/main

    # Or rebase (creates cleaner history)
    git rebase upstream/main

**8. Push to Your Fork**
    git push origin fix-contact-form

**9. Create a Pull Request**
- Go to your fork on GitHub
- Click "Compare & pull request"
- Fill out the PR template
- Wait for review and feedback

**Writing Great Commit Messages**

**The Anatomy of a Good Commit Message:**

    Short summary (50 characters or less)

    Longer explanation if needed. Wrap at 72 characters.
    Explain what you changed and why, not how.

    - Use bullet points for multiple changes
    - Reference issues with "Fixes #123" or "Closes #456"
    - Mention breaking changes

    Co-authored-by: Name <email@example.com>

**Examples of Good Commit Messages:**

    # Good: Clear and specific
    git commit -m "Add email validation to contact form"

    # Better: Includes context
    git commit -m "Add email validation to contact form

    Prevents invalid email addresses from being submitted.
    Uses HTML5 email input type and JavaScript validation.

    Fixes #234"

    # Best: Complete story
    git commit -m "Add comprehensive email validation to contact form

    - Implement HTML5 email input validation
    - Add JavaScript validation with real-time feedback
    - Show error messages for invalid formats
    - Add visual indicators (red border, error icon)
    - Include test cases for common email patterns

    The previous form accepted any text input, causing issues
    with email delivery and user experience.

    Fixes #234
    Closes #256"

**Branch Management Best Practices**

**Branch Naming Conventions:**
    # Feature branches
    feature/dark-mode-toggle
    feature/user-dashboard

    # Bug fixes
    fix/contact-form-validation
    fix/mobile-navigation

    # Documentation
    docs/installation-guide
    docs/api-reference

    # Styling/UI
    style/responsive-layout
    style/accessibility-improvements

**Keeping Branches Clean:**
    # Interactive rebase to clean up commits
    git rebase -i HEAD~3

    # Squash multiple commits into one
    git rebase -i HEAD~3
    # In the editor, change 'pick' to 'squash' for commits to combine

    # Force push after rebase (be careful!)
    git push --force-with-lease origin your-branch

**GitHub Features for FOSS**

**Issues: The Heart of Project Communication**

**Creating Good Issues:**

    ## Bug Report

    **Expected Behavior:**
    The contact form should validate email addresses and show appropriate error messages.

    **Actual Behavior:**  
    The form accepts invalid email formats like "test@" or "notanemail" without any validation.

    **Steps to Reproduce:**
    1. Go to /contact page
    2. Enter invalid email: "test@"
    3. Fill out other required fields
    4. Click submit
    5. Form submits without validation error

    **Environment:**
    - Browser: Chrome 91
    - OS: macOS 11.4
    - Device: Desktop

    **Additional Context:**
    This affects user experience and could lead to delivery issues for responses.

**Pull Request Best Practices**

**PR Title and Description:**

    Fix email validation in contact form

    ## Changes Made
    - Added HTML5 email input type validation
    - Implemented JavaScript validation with real-time feedback
    - Added CSS styling for error states
    - Updated form submission handling

    ## Testing
    - [x] All existing functionality works
    - [x] Email validation works with various formats
    - [x] Error messages display correctly
    - [x] Form styling looks good on mobile and desktop

    ## Screenshots
    [Include before/after screenshots if UI changes]

    ## Breaking Changes
    None

    ## Related Issues
    Fixes #234
    Related to #256

**Code Review Etiquette**

**As a Contributor:**
- Be open to feedback
- Respond promptly to review comments
- Ask questions if feedback is unclear
- Make requested changes quickly
- Thank reviewers for their time

**Example Response to Review:**

    Thanks for the detailed review! I've addressed all your comments:

    1. ✅ Updated email regex pattern as suggested
    2. ✅ Added the missing test case for edge case
    3. ❓ Regarding the error message styling - should I use the existing error class or create a new one?
    4. ✅ Fixed the mobile responsiveness issue

    Let me know if you need any clarification on the changes!

**Advanced Git Techniques for FOSS**

**Cherry-picking Commits:**
    # Apply a specific commit from another branch
    git cherry-pick abc123def

**Stashing Work:**
    # Save current work without committing
    git stash

    # Apply stashed work later
    git stash pop

    # Stash with a message
    git stash save "Work in progress on email validation"

**Working with Large Repositories**

**Shallow Clones:**
    # Clone only recent history
    git clone --depth 1 https://github.com/large-project/repo.git

    # Get more history later if needed
    git fetch --unshallow

**GitHub CLI for Power Users**

    # Install GitHub CLI
    # https://cli.github.com/

    # Create a PR from command line
    gh pr create --title "Fix contact form validation" --body "Detailed description"

    # Check out a PR locally
    gh pr checkout 123

    # View PR status
    gh pr status

    # Create an issue
    gh issue create --title "Bug report" --body "Description"

**FOSS-Specific Git Configuration**

**Global Configuration:**
    # Set your identity
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"

    # Use a better diff tool
    git config --global diff.tool vimdiff

    # Always rebase when pulling
    git config --global pull.rebase true

    # Use SSH instead of HTTPS
    git config --global url."git@github.com:".insteadOf "https://github.com/"

**Project-Specific Configuration:**
    # Use different email for FOSS projects
    git config user.email "your.foss.email@example.com"

    # Set up commit signing
    git config user.signingkey YOUR_GPG_KEY_ID
    git config commit.gpgsign true

**Common Git Mistakes and How to Fix Them**

**1. Committed to Wrong Branch:**
    # Move last commit to a new branch
    git branch new-feature
    git reset --hard HEAD~1
    git checkout new-feature

**2. Need to Change Last Commit Message:**
    git commit --amend -m "New commit message"

**3. Accidentally Committed Sensitive Data:**
    # Remove file from history (be very careful!)
    git filter-branch --force --index-filter \
    'git rm --cached --ignore-unmatch path/to/sensitive/file' \
    --prune-empty --tag-name-filter cat -- --all

**4. Merge Conflicts:**
    # When you encounter conflicts
    git status  # See which files have conflicts
    # Edit files to resolve conflicts
    git add resolved-file.html
    git commit  # Complete the merge

**Your FOSS Git Checklist:**

□ Fork the repository on GitHub
□ Clone your fork locally
□ Add upstream remote
□ Create a feature branch
□ Make your changes
□ Write clear commit messages
□ Keep your branch updated with upstream
□ Push to your fork
□ Create a detailed pull request
□ Respond to code review feedback
□ Celebrate when your PR is merged! 🎉

**Remember: Git is a Tool, Not a Barrier**

Don't let Git complexity discourage you from contributing to FOSS. Start with the basics:
- Fork, clone, branch, commit, push, PR
- Everything else can be learned over time

The FOSS community is generally very helpful with Git questions. When in doubt, ask for help—most maintainers are happy to guide newcomers through the process.

Your first contribution is just a few Git commands away!`
    },
    {
        id: 7,
        title: "Practical Guide: Contributing to TinkerHub's Simple Meme Generator",
        duration: "25 min",
        content: `Congratulations on completing the FOSS fundamentals! Now it's time to put your knowledge into practice by contributing to a real project: TinkerHub's Simple Meme Generator - a beginner-friendly HTML/CSS/JavaScript project.

**About the TinkerHub Simple Meme Generator**

This is a lightweight, beginner-friendly project designed to:
- Help people create and share memes easily
- Provide a platform for learning web development fundamentals
- Demonstrate modern HTML/CSS/JavaScript practices
- Build community through humor and creativity

**Project Tech Stack:**
- **Frontend**: Pure HTML5, CSS3, and Vanilla JavaScript
- **Styling**: Modern CSS with Flexbox/Grid
- **Storage**: Local Storage for saving memes
- **Deployment**: GitHub Pages (simple and free!)
- **Testing**: Manual testing + simple JavaScript tests

**Why This Project is Perfect for Beginners**

**1. No Complex Setup**
- No build tools or package managers
- No frameworks to learn
- Just open index.html in your browser
- Immediate visual feedback

**2. Familiar Technologies**
- HTML for structure
- CSS for styling  
- JavaScript for interactivity
- Technologies every web developer should know

**3. Welcoming Community**
- TinkerHub mentors actively help contributors
- Regular community calls and code reviews
- Beginner-friendly issue labeling
- Detailed contribution guidelines

**4. Diverse Contribution Opportunities**
- UI/UX improvements
- New meme templates
- JavaScript functionality
- CSS animations and effects
- Documentation and tutorials

**Getting Started: Your First Contribution**

**Step 1: Explore the Project**

Visit the repository:
    https://github.com/JakeOJeff/foss-flip

**Read These Files First:**
- README.md - Project overview and setup instructions
- CONTRIBUTING.md - Contribution guidelines
- CODE_OF_CONDUCT.md - Community standards
- index.html - Main application file

**Step 2: Set Up Your Development Environment**

**Prerequisites:**
- A web browser (Chrome, Firefox, Safari, etc.)
- A code editor (VS Code, Sublime Text, Atom)
- Git installed on your computer
- A GitHub account

**Clone and Setup:**
    # Fork the repository on GitHub first!
    git clone https://github.com/YOUR_USERNAME/simple-meme-generator.git
    cd simple-meme-generator

    # Add upstream remote
    git remote add upstream https://github.com/tinkerhub-org/simple-meme-generator.git

    # Open the project
    open index.html
    # Or simply double-click index.html to open in browser

**Step 3: Understanding the Project Structure**

    simple-meme-generator/
    ├── index.html              # Main HTML file
    ├── styles/
    │   ├── main.css           # Main stylesheet
    │   ├── components.css     # Component styles
    │   └── responsive.css     # Mobile responsiveness
    ├── scripts/
    │   ├── app.js             # Main application logic
    │   ├── meme-generator.js  # Meme creation functionality
    │   └── storage.js         # Local storage handling
    ├── assets/
    │   ├── templates/         # Meme template images
    │   ├── fonts/            # Custom fonts
    │   └── icons/            # UI icons
    ├── tests/
    │   └── simple-tests.js   # Basic JavaScript tests
    ├── docs/
    │   └── FEATURES.md       # Feature documentation
    └── README.md

**Step 4: Find Your First Issue**

Look for issues labeled:
- good-first-issue
- beginner-friendly
- help-wanted
- documentation
- ui-improvement

**Current Beginner-Friendly Opportunities:**

**HTML/CSS Tasks:**
- Improve mobile responsiveness
- Add dark mode toggle
- Create better loading animations
- Improve accessibility (ARIA labels, keyboard navigation)
- Add new meme templates

**JavaScript Tasks:**
- Add meme download functionality
- Implement meme sharing to social media
- Create meme history/favorites
- Add text formatting options (bold, italic, colors)
- Implement drag-and-drop for images

**Design Tasks:**
- Create new meme templates
- Improve color schemes
- Design better icons
- Create animated backgrounds
- Improve typography

**Documentation Tasks:**
- Write user guides
- Create video tutorials
- Improve README instructions
- Document code with comments
- Create feature documentation
`},
    {
        id: 8,
        title: "Practical Guide: Making your First Contribution!",
        duration: "20 min",
        content: `
**Making Your First Contribution**

**Example: Adding a "Random Meme Template" Button**

This is a perfect beginner task that touches HTML, CSS, and JavaScript:

**1. Create a Feature Branch:**
    git checkout -b feature/random-template-button

**2. HTML Changes (index.html):**
    <!-- Add this button to the template selection area -->
    <div class="template-controls">
      <h3>Choose a Template</h3>
      <button id="randomTemplateBtn" class="btn btn-secondary">
        🎲 Random Template
      </button>
      <div class="template-grid">
        <!-- existing template options -->
      </div>
    </div>

**3. CSS Styling (styles/components.css):**
    .template-controls {
      margin-bottom: 2rem;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn-secondary {
      background-color: #6c757d;
      color: white;
      margin-bottom: 1rem;
    }

    .btn-secondary:hover {
      background-color: #5a6268;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .btn-secondary:active {
      transform: translateY(0);
    }

**4. JavaScript Functionality (scripts/app.js):**
    // Add this to your existing JavaScript
    document.addEventListener('DOMContentLoaded', function() {
        const randomTemplateBtn = document.getElementById('randomTemplateBtn');
        const templateImages = document.querySelectorAll('.template-option');
        
        randomTemplateBtn.addEventListener('click', function() {
            // Get all available templates
            const templates = Array.from(templateImages);
            
            // Select a random template
            const randomIndex = Math.floor(Math.random() * templates.length);
            const randomTemplate = templates[randomIndex];
            
            // Simulate click on random template
            randomTemplate.click();
            
            // Add visual feedback
            randomTemplateBtn.innerHTML = '🎉 Template Selected!';
            setTimeout(() => {
                randomTemplateBtn.innerHTML = '🎲 Random Template';
            }, 2000);
            
            // Scroll to meme editor
            document.getElementById('meme-editor').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });

**5. Add Simple Test (tests/simple-tests.js):**
    // Simple test for random template functionality
    function testRandomTemplate() {
        console.log('Testing random template selection...');
        
        const randomBtn = document.getElementById('randomTemplateBtn');
        const templates = document.querySelectorAll('.template-option');
        
        if (randomBtn && templates.length > 0) {
            console.log('[PASS] Random template button exists');
            console.log('[PASS] Found ' + templates.length + ' templates');
            
            // Test button click
            randomBtn.click();
            console.log('[PASS] Random template button clickable');
            
            return true;
        } else {
            console.log('[FAIL] Random template test failed');
            return false;
        }
    }

    // Run test when page loads
    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.search.includes('test=true')) {
            testRandomTemplate();
        }
    });

**6. Update Documentation (docs/FEATURES.md):**
    ## Random Template Selection

    Users can click the "Random Template" button to automatically select
    a random meme template from the available options.

    ### Usage
    1. Navigate to the meme creation page
    2. Click the "🎲 Random Template" button
    3. A random template will be selected automatically
    4. The page will scroll to the meme editor
    5. Users can then add text and create their meme

    ### Implementation
    - HTML: Button in template selection area
    - CSS: Hover effects and smooth transitions
    - JavaScript: Random selection logic with visual feedback
    - Accessibility: Proper ARIA labels and keyboard support

    ### Testing
    - Manual testing with different screen sizes
    - JavaScript test function available
    - Cross-browser compatibility verified

**7. Commit and Push:**
    git add .
    git commit -m "Add random template selection feature

    - Add random template button to template selection area
    - Implement smooth hover effects with CSS transitions
    - Add JavaScript logic for random template selection
    - Include visual feedback when template is selected
    - Add smooth scrolling to meme editor after selection
    - Include simple test function for functionality
    - Update feature documentation

    This feature helps users discover new templates and speeds up
    the meme creation process for users who want inspiration.

    Fixes #142"

    git push origin feature/random-template-button

**8. Create Pull Request:**

    ## 🎲 Add Random Template Selection Feature

    ### Description
    Adds a "Random Template" button to help users discover meme templates and speed up the creation process.

    ### Changes Made
    - ✅ Added random template button with emoji icon
    - ✅ Implemented smooth CSS transitions and hover effects
    - ✅ Added JavaScript logic for random template selection
    - ✅ Included visual feedback (button text changes temporarily)
    - ✅ Added smooth scrolling to meme editor after selection
    - ✅ Created simple test function for the feature
    - ✅ Updated feature documentation

    ### Screenshots
    [Include before/after screenshots]

    ### Testing
    - [x] Tested on Chrome, Firefox, and Safari
    - [x] Verified mobile responsiveness
    - [x] Confirmed accessibility with keyboard navigation
    - [x] All existing functionality still works
    - [x] Random selection works with all available templates

    ### Checklist
    - [x] Code follows project style guidelines
    - [x] Self-review completed
    - [x] Feature tested manually
    - [x] Documentation updated
    - [x] No breaking changes introduced

    ### Related Issues
    Fixes #142

    ### Additional Notes
    This is my first contribution to the project! I'm excited to be part of the TinkerHub community. The feature is simple but adds real value for users who want quick inspiration. Please let me know if any changes are needed.
`}, {
        id: 9,
        title: "Conclusion of your Journey",
        duration: "5 min",
        content: `
**Final Words: Your FOSS Journey Starts Now**

You've completed the theoretical foundation of FOSS contribution. The TinkerHub Simple Meme Generator is your practical playground where you can:

- Apply everything you've learned
- Build real software that people use
- Connect with a supportive community
- Grow your skills with familiar technologies

Remember:
- **Start small**: Your first contribution doesn't need to be revolutionary
- **Ask questions**: The community is here to help
- **Be patient**: Good software takes time to build
- **Have fun**: You're building something awesome with amazing people

The world of Free and Open Source Software is waiting for your unique contributions. Your perspective, your ideas, and your code can make a difference.

**Welcome to the TinkerHub family. Let's build something amazing together! 🚀**

---

*Your journey from FOSS learner to FOSS contributor starts with a single pull request. Make it today!*`
    }
];
