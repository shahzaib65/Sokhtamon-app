/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   roboto: ["Roboto","sans-serif"]
      // },
      colors: {
        primary: '#F4932D',
        black: '#000000',
        white: '#ffffff'
      }
    }
  },
  plugins: [],
}

