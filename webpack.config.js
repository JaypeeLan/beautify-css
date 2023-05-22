const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    beautify: path.resolve(__dirname, "./beautify/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "[name].min.js",
  },
};
