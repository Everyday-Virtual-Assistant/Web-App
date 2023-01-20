/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "eva-bg": "#2b2d42",
        "eva-text": "#c1eeff"
      },
      fontFamily: {
        oswald: ['Oswald'],
        brandmark: ['Brandmark-Sans-11', 'sans']
      }
    },
  },
  plugins: [],
}