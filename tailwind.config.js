/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#0ea5e9',
        green: '#22c55e',
        magenta: '#e879f9',
        blue: '#3b82f6'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
