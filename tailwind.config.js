/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        primary: '#63b3f1ff',

        text: '#FFFFFF',
        placeholder: '#9E9E9E',

        error: '#F64C4C',
      },
    },
  },
  plugins: [],
}