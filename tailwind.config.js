/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stochostech: {
          DEFAULT: "#009947"
        }
      }
    },
  },
  plugins: [],
}