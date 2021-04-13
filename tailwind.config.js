const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}"
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      cyan: colors.cyan,
      white: colors.white,
    },
  },
  variants: {},
  plugins: [],
}
