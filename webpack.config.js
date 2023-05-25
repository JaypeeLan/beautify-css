const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    beautify: path.resolve(__dirname, "./src/custom.js"),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].min.js",
  },
};
