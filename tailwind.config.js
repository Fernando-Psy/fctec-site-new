/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Soft neutrals - ultra light and clean
        primary: {
          50: '#fafbfc',
          100: '#f5f7fa',
          200: '#e8ecf1',
          300: '#dae1e9',
          400: '#a8b4c0',
          500: '#7a8a99',
          600: '#5a6978',
          700: '#3f4b57',
          800: '#2a3440',
          900: '#1a2129',
          950: '#0f1419',
        },
        // Soft blue-teal - professional and calm
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Mint teal accent - fresh and modern
        mint: {
          50: '#f0fdfc',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
    },
  },
  plugins: [],
};
