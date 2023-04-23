// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    // exclude node_modules
    rules: [
        // `js` and `jsx` files are parsed using `babel`
        {
          test: /\.(js|jsx)$/, 
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
          // `ts` and `tsx` files are parsed using `ts-loader`
        { 
          test: /\.(ts|tsx)$/, 
          loader: "ts-loader" 
        }
      ],
    },
    resolve: {
      extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],    
    },
};