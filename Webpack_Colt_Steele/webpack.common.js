const path = require("path");

module.exports = {
  // we can have multiple entries
  // this is useful if we have 1 file with our code
  // and 1 file with 3rd party code
  // allows us not to mix the two
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      // NOTE: we're not doing css here anymore
      {
        test: /\.html$/,
        use: ["html-loader"] //replaces static path to image with a "require" path
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader", //moves the image to the dist folder
          options: {
            // NOTE: had to downgrade to webpack version 4, otherwise images wouldn't work and it wouldn't compile
            name: "[name].[hash].[ext]", //with this name.
            outputPath: "imgs",
          }
        }
      }
    ],
  },
};
