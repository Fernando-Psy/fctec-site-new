/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f6fafe",
          100: "#ecf5fa",
          200: "#d9eaf4",
          300: "#c1dceb",
          400: "#a3c9e0",
          500: "#85b5d5",
          600: "#6a9dc4",
          700: "#4e83af",
          800: "#3a5f7d",
          900: "#2d4a61",
          950: "#1a2f42",
        },
        turquoise: {
          50: "#ecfeff",
          100: "#cffafe",
          400: "#67e8f9",
          500: "#22d3ee",
          600: "#06b6d4",
          700: "#0891b2",
        },
        coral: {
          50: "#fff7ed",
          100: "#fed7aa",
          400: "#fdba74",
          500: "#fb923c",
          600: "#f97316",
          700: "#ea580c",
        },
        violet: {
          50: "#f5f3ff",
          100: "#ddd6fe",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
      },
    },
  },
  plugins: [],
};
