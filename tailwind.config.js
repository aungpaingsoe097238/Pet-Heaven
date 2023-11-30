/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff8a5c",
        secondary: "#FFB89D",
        dark: "#334155",
        light: "#f8fafc",
      },
    },
  },
  plugins: [],
};
