/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        greatVibes: ["Great Vibes", "cursive"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
