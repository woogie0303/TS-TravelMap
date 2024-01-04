/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
    extend: {
      colors: {
        primary: "#5843be",
        secondary: "#0a0521",
        third: "#8e9294",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      fontFamily: {
        notoSans: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
