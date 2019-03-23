module.exports = {
  plugins: [
    require("autoprefixer")(),
    require("postcss-import"),
    require('postcss-advanced-variables'),
    require('postcss-preset-env')(),
    require("postcss-extend"),
    require("postcss-mixins")
  ]
};
