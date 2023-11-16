/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["TTNorms", "sans-serif"],
        abh: ["Abhaya Libre", "serif"],
      },
      colors: {
        footer: "#303030",
        dark: "#333333",
        blackDark: "#0A0A0A",
        blackDark2: "#1A1A1A",
        blackLight: "#808080",
        grayLight: "#CCCCCC",
        grayDark: "#999999",
      },
      backgroundImage: {
        "hero-line": "url('/svg/header-sign.svg')",
        "hero-shapes": "url('/svg/hero-shapes.svg')",
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};
