/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252525",
        priamaryText: "#fffff",
        secondatyText: "#9A9A9A",
        overlay: "#C4C4C4",
        buttonsColor: "#3B3B3B",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
