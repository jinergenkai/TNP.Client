/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "#f8f7f4",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "monospace"],
        manhattan: ["Manhattan", "sans-serif"],
        dejaVuSerif: ["DejaVuSerif", "serif"],
        bogart: ["bogart", "serif"],
        sour: ['"Source Serif 4"'],
        montserrat: ['"Montserrat"'],
      },
    },
  },
  plugins: [],
};
