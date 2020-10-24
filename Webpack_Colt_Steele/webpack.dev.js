const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "development", //prevents minifying the code
  devtool: false, //makes the code readable. default is eval()
  output: {
    filename: "[name].bundle.js", //dont want hashing in dev
    path: path.resolve(__dirname, "dev_dist"),
  },
  module: {
    rules: [
      {
        // moving the css rule here because in production we're preparing a separate css file
        test: /\.css$/,
        use: [
          "style-loader", // takes js -> injects into the dom (use 2nd)
          "css-loader", //turns css code -> valid js code (use 1st)
        ],
      },
      {
        test: /\.scss$/, //now sass
        use: [
          "style-loader", // 3 js -> dom
          "css-loader", // 2 css -> js
          "sass-loader", // 1 sass -> css
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin( //makes index.html and automatically includes the hashed script
      {template: "src/template.html"} //tells it to base the html off our version, and not just use a blank file
    ),
  ],
});
