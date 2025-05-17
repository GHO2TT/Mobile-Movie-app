/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./components/**/*.{js,jsx}"], // ✅ Adjusted for JS
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./App.{js,jsx,ts,tsx}",
//     "./components/**/*.{js,jsx,ts,tsx}",
//     "./screens/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   presets: [require("nativewind/preset")],
// };
