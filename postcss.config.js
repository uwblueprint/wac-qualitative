module.exports = {
  plugins: [
    require("autoprefixer")({}),
    require("postcss-simple-vars"),
    require("postcss-import"),
    require("postcss-extend"),
    require("postcss-nested"),
    require("postcss-mixins"),
    require("postcss-inherit")
  ]
};
