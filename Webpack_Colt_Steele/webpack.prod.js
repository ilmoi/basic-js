const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  // mode: "development", //shouldn't be in prod, but I kept anyway
  // devtool: false, //shouldn't be in prod, but I kept anyway
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "prod_dist"),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), //this is the minimizer for CSS. Unfort, when we installed it, we disabled the default JS minifier - Terser. So we need to manually re-enable it below
      new TerserPlugin(), // this is the default JS plugin that got disabled and we're having to manually re-enable it
      // to minifiy HTML (the final part) - see HtmlWebpackPlugin below
    ],
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/, //now sass
        use: [
          MiniCssExtractPlugin.loader, // instead of parsing CSS into JS, we now parse it directly into a CSS file
          // "style-loader", // 3 js -> dom
          "css-loader", // 2 css -> js
          "sass-loader", // 1 sass -> css
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      //this creates a separate css file so that we don't have to wait for js to load css (thus avoid the shitty unCSSed blink in the very beginning)
      filename: "[name].[hash].css", // how we want our separate css file named
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin( //makes index.html and automatically includes the hashed script
      {
        template: "src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      } //tells it to base the html off our version, and not just use a blank file
    ),
  ],
});
