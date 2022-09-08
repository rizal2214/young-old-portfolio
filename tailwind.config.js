/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "rgb(20 184 166)",
      },

      screens: { "2xl": "1320" },
    },
  },
  plugins: [],
};
