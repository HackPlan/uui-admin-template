/* craco.config.js */

module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      plugins: [require('postcss-import'), require('tailwindcss')],
    },
  },
}
