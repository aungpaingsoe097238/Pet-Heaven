/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fb99a8",
        secondary: "#fee6e3",
        dark: "#334155",
        light: "#f8fafc",
      },
    },
  },
  plugins: [],
};
