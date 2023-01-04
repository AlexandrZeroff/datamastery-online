/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007374',
        'salad': '#00A947',
        'grey': '#636363',
        'faded': '#B6B6B6',
      },
    },
  },
  plugins: [],
}
