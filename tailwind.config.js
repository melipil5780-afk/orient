/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0a0f1e',
        'bg-card': 'rgba(12, 18, 34, 0.97)',
        'teal': '#0d9488',
        'teal-light': '#5eead4',
        'amber': '#d97706',
        'amber-light': '#fbbf24',
        'rose': '#e11d48',
        'rose-light': '#fca5a5',
      },
      fontFamily: {
        'display': ['Fraunces', 'Georgia', 'serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}