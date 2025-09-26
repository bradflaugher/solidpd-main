# React Development Guide for Solid Product Design Website

This comprehensive guide will help you set up, develop, and deploy the Solid Product Design website, even if you're new to React development.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Understanding the Project Structure](#understanding-the-project-structure)
4. [Development Workflow](#development-workflow)
5. [Building and Testing](#building-and-testing)
6. [Deployment](#deployment)
7. [Common Tasks](#common-tasks)
8. [Troubleshooting](#troubleshooting)
9. [Learning Resources](#learning-resources)

## 🛠️ Prerequisites

### Required Software

Before you start, you'll need to install these tools on your computer:

#### 1. Node.js (Version 18 or higher)
- **Download**: [nodejs.org](https://nodejs.org/)
- **Why**: Node.js is the runtime that allows you to run JavaScript outside the browser
- **Verify installation**: Open terminal/command prompt and run:
  ```bash
  node --version
  npm --version
  ```

#### 2. Git
- **Download**: [git-scm.com](https://git-scm.com/)
- **Why**: Version control system to manage code changes
- **Verify installation**:
  ```bash
  git --version
  ```

#### 3. Code Editor (Recommended: VS Code)
- **Download**: [code.visualstudio.com](https://code.visualstudio.com/)
- **Why**: Best editor for React development with excellent extensions

#### 4. pnpm (Package Manager)
- **Install**: After Node.js is installed, run:
  ```bash
  npm install -g pnpm
  ```
- **Why**: Faster and more efficient than npm for managing dependencies
- **Verify installation**:
  ```bash
  pnpm --version
  ```

### Recommended VS Code Extensions

Install these extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - Code snippets
2. **Prettier - Code formatter** - Automatic code formatting
3. **ESLint** - Code linting and error detection
4. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
5. **Bracket Pair Colorizer** - Color matching brackets
6. **GitLens** - Enhanced Git capabilities
7. **Tailwind CSS IntelliSense** - Tailwind CSS autocomplete

## 🚀 Initial Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/bradflaugher/solidpd-main.git

# Navigate to the project directory
cd solidpd-main
```

### 2. Install Dependencies

```bash
# Install all project dependencies
pnpm install
```

This command will:
- Read the `package.json` file
- Download all required packages
- Create a `node_modules` folder with all dependencies
- Generate a `pnpm-lock.yaml` file (don't delete this!)

### 3. Start Development Server

```bash
# Start the development server
pnpm run dev
```

You should see output like:
```
> solidpd-website@0.0.0 dev
> vite

  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and go to `http://localhost:5173/` to see the website!

## 📁 Understanding the Project Structure

Here's what each folder and file does:

```
solidpd-main/
├── .github/workflows/          # GitHub Actions for automatic deployment
│   └── deploy.yml             # Deployment configuration
├── dist/                      # Built files (created after running build)
├── node_modules/              # Dependencies (don't edit these)
├── public/                    # Static files
│   ├── favicon.ico           # Website icon
│   ├── robots.txt            # Search engine instructions
│   └── _redirects            # Netlify routing rules
├── src/                      # Source code (this is where you work!)
│   ├── components/           # Reusable UI components
│   │   ├── Navigation.jsx    # Header navigation
│   │   ├── Footer.jsx        # Footer component
│   │   └── ui/              # Pre-built UI components
│   ├── pages/               # Website pages
│   │   ├── Home.jsx         # Homepage
│   │   ├── Work.jsx         # Portfolio page
│   │   ├── About.jsx        # About page
│   │   ├── Services.jsx     # Services page
│   │   └── Contact.jsx      # Contact page
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Base CSS styles
├── .gitignore               # Files to ignore in Git
├── index.html               # Main HTML template
├── netlify.toml             # Netlify deployment configuration
├── package.json             # Project dependencies and scripts
├── pnpm-lock.yaml           # Locked dependency versions
├── README.md                # Project documentation
└── vite.config.js           # Build tool configuration
```

### Key Concepts

#### Components
- **What**: Reusable pieces of UI (like LEGO blocks)
- **Example**: Navigation bar, footer, buttons
- **File extension**: `.jsx` (JavaScript + XML)

#### Pages
- **What**: Full page components that represent different routes
- **Example**: Home page, About page, Contact page

#### Routing
- **What**: How the website shows different pages based on the URL
- **Tool**: React Router DOM handles this automatically

## 🔄 Development Workflow

### Daily Development Process

1. **Start your day**:
   ```bash
   # Pull latest changes from GitHub
   git pull origin main
   
   # Start development server
   pnpm run dev
   ```

2. **Make changes**:
   - Edit files in the `src/` directory
   - Save files (Ctrl+S / Cmd+S)
   - Browser automatically refreshes with changes

3. **Test your changes**:
   - Check the website in your browser
   - Test on different screen sizes
   - Verify all pages work correctly

4. **Commit your changes**:
   ```bash
   # Check what files changed
   git status
   
   # Add files to commit
   git add .
   
   # Commit with a descriptive message
   git commit -m "Update homepage hero section styling"
   
   # Push to GitHub
   git push origin main
   ```

### Making Changes

#### Editing Content

**To change text on the homepage**:
1. Open `src/pages/Home.jsx`
2. Find the text you want to change
3. Edit it directly in the JSX
4. Save the file

**Example**:
```jsx
// Before
<h1>Creating a SOLID foundation</h1>

// After
<h1>Creating a STRONG foundation</h1>
```

#### Adding New Pages

1. Create a new file in `src/pages/` (e.g., `NewPage.jsx`)
2. Add the basic component structure:
   ```jsx
   export default function NewPage() {
     return (
       <div className="min-h-screen bg-white">
         <h1>New Page</h1>
         <p>Content goes here</p>
       </div>
     );
   }
   ```
3. Add the route in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage';
   
   // Add to the Routes section
   <Route path="/new-page" element={<NewPage />} />
   ```

#### Styling with Tailwind CSS

This project uses Tailwind CSS for styling. Instead of writing custom CSS, you add classes:

```jsx
// Examples of Tailwind classes
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Blue background, white text, padding, rounded corners
</div>

<h1 className="text-4xl font-bold text-center">
  Large, bold, centered text
</h1>
```

**Common Tailwind classes**:
- `bg-blue-500` - Blue background
- `text-white` - White text
- `p-4` - Padding on all sides
- `m-4` - Margin on all sides
- `rounded-lg` - Rounded corners
- `shadow-lg` - Drop shadow
- `hover:bg-blue-600` - Darker blue on hover

## 🏗️ Building and Testing

### Development Build
```bash
# Run the development server (auto-reloads on changes)
pnpm run dev
```

### Production Build
```bash
# Create optimized files for deployment
pnpm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

### Preview Production Build
```bash
# Build and preview the production version locally
pnpm run build
pnpm run preview
```

### Code Quality Checks
```bash
# Check for code errors and style issues
pnpm run lint

# Fix automatically fixable issues
pnpm run lint --fix
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

The website automatically deploys when you push changes to GitHub:

1. **Main branch** → Production website (solidpd.com)
2. **Other branches** → Preview deployments

### Manual Deployment

If you need to deploy manually:

```bash
# Build the project
pnpm run build

# Install Netlify CLI (one time only)
npm install -g netlify-cli

# Login to Netlify (one time only)
netlify login

# Deploy to production
netlify deploy --prod --dir=dist

# Deploy preview
netlify deploy --dir=dist
```

## 🔧 Common Tasks

### Adding New Images

1. Add image files to `public/` folder
2. Reference them in your components:
   ```jsx
   <img src="/my-image.jpg" alt="Description" />
   ```

### Updating Navigation

Edit `src/components/Navigation.jsx`:
```jsx
// Add new navigation item
<a href="/new-page" className="nav-link">
  New Page
</a>
```

### Changing Colors

The website uses a consistent color scheme defined in Tailwind. Common colors:
- `bg-gray-900` - Dark background
- `bg-blue-500` - Blue accent
- `text-white` - White text
- `text-gray-600` - Gray text

### Adding New Components

1. Create a new file in `src/components/`
2. Export the component:
   ```jsx
   export default function MyComponent() {
     return (
       <div>
         <h2>My Component</h2>
       </div>
     );
   }
   ```
3. Import and use it in other files:
   ```jsx
   import MyComponent from '../components/MyComponent';
   
   // Use it in JSX
   <MyComponent />
   ```

## 🐛 Troubleshooting

### Common Issues

#### "Command not found: pnpm"
**Solution**: Install pnpm globally
```bash
npm install -g pnpm
```

#### "Port 5173 is already in use"
**Solution**: Kill the existing process or use a different port
```bash
# Kill existing process
pkill -f vite

# Or start on different port
pnpm run dev --port 3000
```

#### "Module not found" errors
**Solution**: Reinstall dependencies
```bash
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

#### Build fails
**Solution**: Check for syntax errors
```bash
# Run linting to find errors
pnpm run lint

# Check the console output for specific error messages
```

#### Website looks broken after changes
**Solution**: 
1. Check browser console for errors (F12)
2. Verify all imports are correct
3. Check for typos in class names
4. Restart development server

### Getting Help

1. **Check the browser console** (F12 → Console tab)
2. **Read error messages carefully** - they usually tell you exactly what's wrong
3. **Check the terminal** where you ran `pnpm run dev` for error messages
4. **Google the error message** - someone else has probably had the same issue
5. **Check the React documentation** - [reactjs.org](https://reactjs.org/)

## 📚 Learning Resources

### React Basics
- [React Official Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [freeCodeCamp React Course](https://www.freecodecamp.org/learn/front-end-development-libraries/)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### JavaScript (if you need a refresher)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)

### Git and GitHub
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Desktop](https://desktop.github.com/) - GUI alternative to command line

## 🎯 Next Steps

Once you're comfortable with the basics:

1. **Learn about React Hooks** - useState, useEffect, etc.
2. **Explore advanced Tailwind features** - responsive design, animations
3. **Add new features** - contact forms, image galleries, etc.
4. **Optimize performance** - image optimization, code splitting
5. **Add testing** - unit tests, integration tests

## 💡 Tips for Success

1. **Start small** - Make one small change at a time
2. **Save frequently** - Ctrl+S / Cmd+S should become automatic
3. **Use the browser developer tools** - F12 is your friend
4. **Read error messages** - They're usually helpful
5. **Don't be afraid to experiment** - You can always undo changes with Git
6. **Ask for help** - The React community is very helpful

---

**Remember**: Everyone was a beginner once. Take your time, be patient with yourself, and don't hesitate to ask questions. The most important thing is to start coding and learn by doing!

Happy coding! 🚀
