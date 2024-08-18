/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BuncitsHoles: "BuncitsHoles",
        ChunkyUnicornDemoRegular: "ChunkyUnicornDemoRegular",
      },
    },
    screens: {
      "2xs": "380px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
  },
  plugins: [],
};
