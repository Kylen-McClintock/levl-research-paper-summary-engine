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
  safelist: [
    {
      pattern: /(bg|text|border|hover:border|group-hover:bg)-(blue|fuchsia|emerald|rose|amber|red|indigo|orange|cyan|yellow|slate)(-500)?/,
    }
  ],
  plugins: [],
}
