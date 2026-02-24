# Contributing to FCTEC Site

First off, thank you for considering contributing to FCTEC Site! It's people like you that make this project better.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title** for the issue to identify the problem
- **Describe the exact steps which reproduce the problem** in as much detail as possible
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs** if possible
- **Include your environment details** (OS, browser, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title** for the issue to identify the suggestion
- **Provide a step-by-step description of the suggested enhancement** in as much detail as possible
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior** and **explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Follow the JavaScript/React styleguides
- Include thoughtfully-worded, well-structured tests
- Document new code based on the Documentation Styleguide
- End all files with a newline

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` when improving the format/structure of the code
  - 🐎 `:racehorse:` when improving performance
  - 📝 `:memo:` when writing docs
  - 🐛 `:bug:` when fixing a bug
  - 🔥 `:fire:` when removing code or files
  - ✅ `:white_check_mark:` when adding tests
  - 🔒 `:lock:` when dealing with security
  - ⬆️ `:arrow_up:` when upgrading dependencies
  - ⬇️ `:arrow_down:` when downgrading dependencies

### JavaScript Styleguide

- Use semicolons (`;`)
- Use single quotes (`'`) for strings
- Prefer `const` over `let`. Never use `var`
- Use template literals for string concatenation
- Use arrow functions when possible
- Use async/await over promises when possible
- Always use PropTypes or TypeScript for component props
- Prefer named exports over default exports
- Keep functions small and focused
- Write meaningful variable names

### React Styleguide

- One component per file
- Use functional components with hooks
- Use PascalCase for component names
- Use camelCase for prop names
- Always add PropTypes or TypeScript types
- Use destructuring for props
- Keep components under 300 lines
- Extract reusable logic into custom hooks
- Use memo, useMemo, and useCallback when appropriate
- Always provide keys for list items

### CSS Styleguide

- Use Tailwind utility classes when possible
- Follow BEM methodology for custom CSS
- Use CSS modules for component-specific styles
- Prefer Flexbox over floats
- Use CSS custom properties for theming
- Mobile-first approach for media queries

### Documentation Styleguide

- Use [Markdown](https://guides.github.com/features/mastering-markdown/)
- Reference functions, classes, and modules with backticks
- Use code blocks for examples

## Development Process

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a branch** for your feature or bug fix
4. **Install dependencies**: `npm install`
5. **Make your changes** following the styleguides
6. **Test your changes**: `npm run lint` and `npm run format:check`
7. **Commit your changes** with a clear commit message
8. **Push** to your fork
9. **Submit a Pull Request**

## Setting Up Your Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/fctec-site.git

# Navigate to the directory
cd fctec-site

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

## Testing

Before submitting a pull request, make sure to:

1. Run linting: `npm run lint`
2. Check formatting: `npm run format:check`
3. Build the project: `npm run build`
4. Test the build: `npm run preview`

## Questions?

Feel free to reach out if you have questions or need help!

Thank you for your contribution! 🎉
