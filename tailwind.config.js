/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["Pretendard Variable", "sans-serif"],
        teko: ["Teko", "serif"],
      },
    },
  },
  plugins: [],
};
