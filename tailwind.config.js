/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: "#FFC1DC",
        night: "#0C0A1B",
        gold: "#FFD700",
      },
      fontFamily: {
        magic: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
