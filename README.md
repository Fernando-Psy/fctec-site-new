# FCTEC Site

A modern, high-performance website built with React, Vite, and Tailwind CSS, optimized for exceptional user experience and search engine visibility.

## 🚀 Features

- **Lightning Fast**: Optimized build with Vite for instant hot module replacement
- **Modern UI**: Beautiful, responsive design with Tailwind CSS and custom neumorphic styles
- **SEO Optimized**: Built-in SEO components with dynamic meta tags
- **Performance First**: Code splitting, lazy loading, and optimized assets
- **Type Safe**: TypeScript support with comprehensive type checking
- **Code Quality**: ESLint and Prettier for consistent, maintainable code
- **Accessible**: WCAG compliant components and semantic HTML

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0 or higher)
- **npm** (v7.0 or higher) or **yarn** (v1.22 or higher)

## 🛠️ Installation

1. **Clone the repository**

\`\`\`bash
git clone <repository-url>
cd fctec-site-new
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. **Set up environment variables**

\`\`\`bash
cp .env.example .env
\`\`\`

Edit \`.env\` with your configuration values.

## 🏃 Running the Project

### Development Mode

Start the development server with hot reload:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

The application will be available at \`http://localhost:3000\`

### Production Build

Build the application for production:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

### Preview Production Build

Preview the production build locally:

\`\`\`bash
npm run preview
# or
yarn preview
\`\`\`

## 📁 Project Structure

\`\`\`
fctec-site-new/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, logos, and other media
│   ├── components/     # React components
│   │   ├── Header/    # Navigation and header
│   │   ├── Hero/      # Hero section
│   │   ├── Services/  # Service cards and details
│   │   └── ...        # Other components
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API services and utilities
│   ├── styles/        # Global styles and CSS modules
│   ├── utils/         # Utility functions and helpers
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── .editorconfig      # Editor configuration
├── .env.example       # Environment variables template
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
\`\`\`

## 🧪 Code Quality

### Linting

Check for code quality issues:

\`\`\`bash
npm run lint
# or
yarn lint
\`\`\`

### Formatting

Format code with Prettier:

\`\`\`bash
npm run format
# or
yarn format
\`\`\`

## 🌍 Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| \`VITE_API_URL\` | Backend API base URL | \`http://127.0.0.1:8000/api\` | Yes |
| \`VITE_DEBUG\` | Enable debug logging | \`false\` | No |
| \`NODE_ENV\` | Environment mode | \`development\` | Yes |

See \`.env.example\` for the complete list of available variables.

## 📦 Key Dependencies

### Production
- **React 18**: UI library
- **React Router DOM**: Client-side routing
- **Bootstrap**: CSS framework
- **Axios**: HTTP client
- **Tailwind CSS**: Utility-first CSS framework

### Development
- **Vite**: Build tool and dev server
- **ESLint**: JavaScript linter
- **Prettier**: Code formatter
- **TypeScript**: Type checking

## 🎨 Styling

The project uses a hybrid approach:
- **Tailwind CSS** for utility classes
- **Custom CSS** for unique components
- **Neumorphic Design** for modern UI elements

## 🔍 Performance Optimizations

- Lazy loading for route-based code splitting
- Image optimization with modern formats
- Critical CSS inlining
- Brotli and Gzip compression
- Tree shaking and dead code elimination
- Minification with Terser

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

### Code Standards

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation for new features
- Ensure all tests pass before submitting

## 📄 License

This project is proprietary and confidential.

## 👥 Team

- **Development**: FCBJ Desenvolvimento
- **Contact**: [Contact Information]

## 🐛 Bug Reports

If you discover a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Your environment details

## 📞 Support

For support, please contact:
- Email: [Contact Email]
- WhatsApp: +55 21 96881-0478

---

Made with ❤️ by FCBJ Desenvolvimento
