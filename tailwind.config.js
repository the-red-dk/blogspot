/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        lightlyorange: "rgba(248, 170, 25, 0.600)"
      }
    },
  },
  plugins: [],
}
