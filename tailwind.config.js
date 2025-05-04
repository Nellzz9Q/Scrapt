// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notojp: ["var(--font-notojp)"],
        poppins: ["var(--font-poppins)"],
        museo: ["var(--font-museo)"], // ← これが必要！
      },
    },
  },
  plugins: [],
};