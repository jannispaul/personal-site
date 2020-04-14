module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `images/` to `_site/images`
  eleventyConfig.addPassthroughCopy("images");

  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  // eleventyConfig.addPassthroughCopy("css/fonts");

  eleventyConfig.addPassthroughCopy("assets");
};

const CleanCSS = require("clean-css");
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
};
