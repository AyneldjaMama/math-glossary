# Quick Start Guide - Setting Up Your GitHub Repository

Follow these steps to set up your math glossary project repository for Claude Code.

## Step 1: Create Repository Structure

In your local project folder, create this structure:

```
math-glossary/
├── README.md
├── .gitignore
├── data/
│   └── glossary.json
└── docs/
    └── DATA_STRUCTURE.md
```

## Step 2: Add Files to Your Repository

### Create the data folder:
```bash
mkdir data
```

### Move files into place:
1. **glossary.json** → Put in `data/` folder
2. **README.md** → Root of repository
3. **.gitignore** → Root of repository
4. **DATA_STRUCTURE.md** → Put in `docs/` folder (create `docs/` first)

## Step 3: Initialize Git

```bash
# Navigate to your project folder
cd math-glossary

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Add math glossary data and documentation"
```

## Step 4: Connect to GitHub

### Option A: Create new repository on GitHub first
1. Go to github.com
2. Click "New repository"
3. Name it `math-glossary` (or your preferred name)
4. **Don't** initialize with README (you already have one)
5. Copy the repository URL

Then connect your local repo:
```bash
git remote add origin https://github.com/YOUR-USERNAME/math-glossary.git
git branch -M main
git push -u origin main
```

### Option B: Use GitHub CLI
```bash
gh repo create math-glossary --public --source=. --remote=origin
git push -u origin main
```

## Step 5: Connect Claude Code

1. Open Claude Code in your terminal
2. When prompted, select your GitHub repository
3. Claude Code will clone and connect to your repo

## Step 6: Tell Claude Code What to Build

Start with a clear request like:

```
"Create an interactive math glossary web app using the data in data/glossary.json. 
The app should have:
- A search bar to find terms
- Filter buttons for each domain (Geometry, Algebra, etc.)
- Cards displaying each term with its SVG visual
- Responsive design that works on mobile
- Clean, kid-friendly UI

Use vanilla JavaScript and CSS (no frameworks needed for v1)."
```

## Files Checklist

Before pushing to GitHub, make sure you have:

- [ ] **README.md** - Project description and features
- [ ] **.gitignore** - To ignore node_modules, etc.
- [ ] **data/glossary.json** - Your 215 math terms
- [ ] **docs/DATA_STRUCTURE.md** - Documentation for the data format

## Optional Files to Add Later

As Claude Code builds your app, you'll add:
- `index.html` - Main HTML file
- `style.css` or `styles/main.css` - Styling
- `script.js` or `scripts/app.js` - JavaScript logic
- `package.json` - If using npm packages

## Tips for Success

1. **Clear commits** - Use descriptive commit messages
2. **Small changes** - Commit frequently with focused changes
3. **Good documentation** - Keep README updated as features are added
4. **Test locally** - Make sure everything works before pushing

## Common Issues

### "Repository already exists"
- Delete the existing empty repo on GitHub first, or
- Use a different name for your repository

### "Permission denied"
- Make sure you're authenticated with GitHub
- Use `gh auth login` or set up SSH keys

### "Files too large"
- The glossary.json is only 156KB, so this shouldn't be an issue
- If you add large assets later, consider Git LFS

## Next Steps

Once your repository is set up and Claude Code is connected:

1. Ask Claude Code to create the initial HTML/CSS/JS structure
2. Implement core features (search, filter, display)
3. Test on different devices
4. Add enhancements (text-to-speech, favorites, etc.)
5. Deploy to GitHub Pages or Netlify

Good luck building your math glossary app! 🚀
