const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require("autoprefixer")(),
    require("postcss-import"),
    require('postcss-advanced-variables'),
    postcssPresetEnv(),
    require("postcss-extend"),
    require("postcss-mixins")
  ]
};
