var path = require("path")

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
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  externals: {
    fontawesome_svg_core: "@fortawesome/fontawesome-svg-core",
    free_solid_svg_icons: "@fortawesome/free-solid-svg-icons",
    react_fontawesome: "@fortawesome/react-fontawesome",
    react: "react",
    react_dom: "react-dom",
    react_router_dom: "react-router-dom"
  }
}