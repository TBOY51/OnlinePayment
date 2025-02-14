/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from: {transform: "translateX(0)"},
          to: {transform: "translatex(-100)"}
        }
      }
    },
  },
  plugins: [],
}

