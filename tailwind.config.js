/ ** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        leadNavy: 'var(--leadNavy)',    // primary background
        leadAccent: 'var(--leadAccent)',  // accent color
        leadLight: 'var(--leadLight)',   // light background / text
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
};

/* 
  Note: Ensure that the Google Fonts for Oswald and Cinzel are imported in your global CSS or HTML file, for example:

  @import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Oswald&display=swap');
*/