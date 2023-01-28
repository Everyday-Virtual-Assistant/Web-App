/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1536px"
    },
    extend: {
      colors: {
        "eva-bg": "#2b2d42",
        "eva-text": "#c1eeff",
        "eva-highlight": "#8769E6"
      },
      fontFamily: {
        oswald: ['Oswald'],
        brandmark: ['Brandmark-Sans-11', 'sans']
      },
      backgroundImage: {
        'layered-waves': "url('/src/assets/layered-waves.svg')",
        'layered-peaks': "url('/src/assets/layered-peaks.svg')"
      }
    },
  },
  plugins: [],
}