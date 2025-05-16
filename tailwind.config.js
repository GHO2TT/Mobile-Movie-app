/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./components/**/*.{js,jsx}"], // ✅ Adjusted for JS
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
