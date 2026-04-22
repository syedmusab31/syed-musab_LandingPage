/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#191a23",
        green: "#b9ff66",
        grey: "#f3f3f3",
        black: "#000",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
