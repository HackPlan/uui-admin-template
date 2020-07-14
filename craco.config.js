/* craco.config.js */

module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      plugins: [require('postcss-import'), require('tailwindcss')],
    },
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({
          webpackConfig,
        }) => {
          const minimizerIndex = webpackConfig.optimization.minimizer.findIndex(item => item.options.terserOptions);
          const terserOption = webpackConfig.optimization.minimizer[minimizerIndex].options.terserOptions
          terserOption.keep_classnames = true;
          terserOption.keep_fnames = true;
          return webpackConfig;
        },
      },
    },
  ],
}
