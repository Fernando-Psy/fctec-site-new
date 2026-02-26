# Quick Reference - Command Cheat Sheet

Essential commands for working with this project following US industry standards.

## 📦 Installation

```bash
# Install all dependencies
npm install

# Install Prettier (if not yet installed)
npm install --save-dev prettier@^3.1.0
```

## 🏃 Development

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clean build artifacts
npm run clean
```

## 🧹 Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check

# Type check (TypeScript)
npm run type-check
```

## 📊 Analysis

```bash
# Analyze bundle size
npm run analyze
```

## 🔄 Common Workflows

### Starting Development

```bash
git pull
npm install
npm run dev
```

### Before Committing

```bash
npm run format
npm run lint:fix
npm run lint
git add .
git commit -m "type(scope): message"
git push
```

### Before Deploying

```bash
npm run lint
npm run type-check
npm run build
npm run preview  # Test the build locally
```

## 🐛 Debugging

```bash
# Clear all caches and reinstall
rm -rf node_modules dist .vite
npm install

# Check for outdated packages
npm outdated

# Update packages (carefully!)
npm update
```

## 📝 Git Commit Types

```bash
# New feature
git commit -m "feat(component): add user profile"

# Bug fix
git commit -m "fix(api): resolve authentication issue"

# Documentation
git commit -m "docs(readme): update installation steps"

# Code refactoring
git commit -m "refactor(utils): improve logger performance"

# Performance improvement
git commit -m "perf(images): optimize image loading"

# Tests
git commit -m "test(services): add api service tests"

# Configuration changes
git commit -m "chore(deps): update dependencies"

# Styling/formatting
git commit -m "style(components): fix formatting"
```

## 🔧 Environment Variables

```bash
# Copy example env file
cp .env.example .env

# Edit environment variables
nano .env  # or code .env

# Required variables:
# VITE_API_URL=http://127.0.0.1:8000/api
# VITE_DEBUG=false
```

## 🎨 VS Code

### Open Command Palette

- **Windows/Linux**: `Ctrl + Shift + P`
- **Mac**: `Cmd + Shift + P`

### Quick Actions

- **Format Document**: `Shift + Alt + F` (Windows/Linux) or `Shift + Option + F` (Mac)
- **Quick Fix**: `Ctrl + .` (Windows/Linux) or `Cmd + .` (Mac)
- **Go to Definition**: `F12`
- **Find References**: `Shift + F12`

### Useful Commands

```
>Prettier: Format Document
>ESLint: Fix all auto-fixable Problems
>Extensions: Show Recommended Extensions
```

## 📚 File Locations

### Configuration

- `.prettierrc` - Prettier configuration
- `eslint.config.js` - ESLint configuration
- `.editorconfig` - Editor configuration
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `.env` - Environment variables (create from .env.example)

### Documentation

- `README.md` - Project overview
- `CONTRIBUTING.md` - Contribution guidelines
- `CHANGELOG.md` - Version history
- `US_STANDARDS_SUMMARY.md` - Standards implementation summary
- `NEXT_STEPS.md` - Post-setup guide
- `docs/` - Technical documentation

## 🚨 Troubleshooting

### Problem: Prettier not working

```bash
npm install --save-dev prettier@^3.1.0
# Restart your IDE
```

### Problem: ESLint errors

```bash
npm run lint:fix
npm run lint
```

### Problem: Build fails

```bash
npm run clean
npm install
npm run build
```

### Problem: Port already in use

```bash
# Kill process on port 3000 (Linux/Mac)
lsof -ti:3000 | xargs kill -9

# Or change port in vite.config.ts
```

## 📖 Documentation Quick Links

| Topic          | File                       |
| -------------- | -------------------------- |
| Project Setup  | `README.md`                |
| Contributing   | `CONTRIBUTING.md`          |
| Architecture   | `docs/ARCHITECTURE.md`     |
| Code Standards | `docs/CODING_STANDARDS.md` |
| Constants      | `docs/CONSTANTS.md`        |
| Security       | `SECURITY.md`              |
| Next Steps     | `NEXT_STEPS.md`            |

## 🔗 Useful Links

- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## 💡 Tips

1. **Format on save**: Enable in VS Code settings for automatic formatting
2. **ESLint in editor**: Install VS Code ESLint extension for inline warnings
3. **Git hooks**: Set up Husky for automatic checks before commits
4. **Logger usage**: Use `logger.info()` instead of `console.log()`
5. **Environment**: Always use environment variables for configuration

## 📞 Getting Help

1. Check error messages carefully
2. Review documentation in `docs/`
3. Search issues in project repository
4. Ask team members
5. Check tool documentation (links above)

---

**Pro Tip**: Bookmark this file for quick access to common commands!
