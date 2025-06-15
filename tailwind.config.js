/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "white",
        light: {
          100: "#D6C7FF",
          200: "orange",
          300: "#9CA4AB",
        },
        dark: {
          100: "darkblue",
          200: "#0F0D23",
        },
        accent: "red",
      },
    },
  },
  plugins: [],
};
