/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        leadNavy: "#2A3E4C",
        leadNavyDark: "#1A2B3A",
        leadGold: "#FFD700"
      }
    },
  },
  plugins: [],
};
