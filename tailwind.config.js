module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       lato: ["Lato", "sans-serif"],
       spaceMono: ["Space Mono", "monospace"],
      },
      colors: {
        'black100': '#272727',
        'black80': '#525252',
        'black50': '#939393',
        'borderLines' : '#E8E8E8',
      },
    },
  },
  plugins: [],
}