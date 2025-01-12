/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Include `app` directory for Next.js 13+ if you're using it
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};