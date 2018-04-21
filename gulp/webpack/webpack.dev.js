const path = require("path");
const webpack = require("webpack");
const PLUGINS = require("./plugins/plugins");

module.exports = {
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        query: {
          configFile: "./.eslintrc.js",
          fix: true
        }
      },
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "mustache-loader"
      },
      {
        test: /\.glsl$/,
        loader: "webpack-glsl-loader"
      }
    ]
  },
  resolve: {
    alias: {
      templates: path.resolve(__dirname, "../../src/templates")
    }
  },
  plugins: PLUGINS.devPlugins()
};
