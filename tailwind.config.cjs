/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'bityo': '#17FFAD',
        "bityo-hover": "#08c986",
      },
    },
     fontFamily: {
      'mytest': ['Arial', 'sans-serif'],
    }
  },
  plugins: [],
}
