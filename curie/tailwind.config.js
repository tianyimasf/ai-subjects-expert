/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBackground: '#27272A', // Custom dark mode background color
      },
    },
  },
  darkMode: 'class', // Enable dark mode
  plugins: [],
}