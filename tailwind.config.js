import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          ...colors.cyan,
          DEFAULT: '#0ea5e9',
        },
        green: {
          ...colors.green,
          DEFAULT: '#22c55e',
        },
        magenta: {
          ...colors.fuchsia,
          DEFAULT: '#e879f9',
        },
        blue: {
          ...colors.blue,
          DEFAULT: '#3b82f6',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
