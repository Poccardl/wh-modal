var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "css-loader"
      }
    ]
  },
  externals: {
    core: "@fortawesome/fontawesome-svg-core",
    icons: "@fortawesome/free-solid-svg-icons",
    fontawesome: "@fortawesome/react-fontawesome",
    react: "react"
  }
};