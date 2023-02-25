/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2f3640",
      },
      backgroundImage: {
        banner: `url('../public/images/banner.webp')`,
      },
    },
  },
  plugins: [],
};
