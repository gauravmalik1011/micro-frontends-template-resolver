"use strict";

const Path = require("path");
const Webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  stats: "errors-only",
  optimization: {
    minimize: true
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new Webpack.optimize.ModuleConcatenationPlugin()
  ],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  }
});
