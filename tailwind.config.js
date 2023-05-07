/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'AbrilFatface': ['Abril Fatface', 'cursive'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Sen': ['Sen', 'sans-serif'],
        'Literata': ['Literata', 'serif'],
      }
    },
  },
  plugins: [],
}