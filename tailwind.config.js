module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./projects/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "5.5xl": "3.5rem",
      },
      colors: {
        primary: "#090e1b",
        secondary: "#0d1426",
        tertiary: "#0c1327",
      },
      minWidth: {
        "1/2": "50%",
      },
      maxWidth: {
        "85p": "85%",
      },
      spacing: {
        160: "40rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
