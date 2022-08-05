const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
        sora: ["Sora", ...defaultTheme.fontFamily.sans],
        opensans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        firamono: ["Fira Mono", ...defaultTheme.fontFamily.sans],
        ibmplexmono: ["IBM Plex Mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
