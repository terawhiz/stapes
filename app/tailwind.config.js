module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      charcoal: "#404E5C",
      blackCoral: "#4F6272",
      lavenderBlue: "#B7C3F3",
      ciyamen: "#DD7596",
      red: "#CF1259",
    },
    fontFamily: { rancho: ["Rancho"] },
    fonSize: {
      stapes: "3rem",
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
