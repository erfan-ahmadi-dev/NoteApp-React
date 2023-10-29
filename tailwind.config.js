/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        floatShadow: [
          "-5px 0px 10px rgba(0, 0, 0, 0.40)",
          " 0px 5px 10px rgba(0, 0, 0, 0.40)",
        ],
      },
      colors: {
        primary: "#252525",
        secondary: "#3B3B3B",
        priamaryText: "#fffff",
        secondaryText: "#9A9A9A",
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
