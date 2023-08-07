/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1000px" },
      md: { max: "767px" },
      xmd: { max: "600px" },
      sm: { max: "670px" },
      xsm: { max: "500px" },
      xxsm: { max: "380px" },
    },
    extend: {
      spacing: {
        650: "650px",
        500: "500px",
        80: "80vh",
        10: "10vh",
      },
      colors: {
        white: "#F5F5F5",
        darkSlate: "#131b24",
      },
    },
  },
  plugins: [],
};
