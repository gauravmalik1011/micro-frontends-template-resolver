"use strict";

const Path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const dest = Path.join(__dirname, "../build");

module.exports = (env, args) => {
  return {
    target: "node",
    mode: env || process.env.NODE_ENV || "development",
    devtool: "eval-source-map",
    node: {
      __dirname: true
    },
    externals: [nodeExternals()],
    entry: ["@babel/polyfill", Path.resolve(__dirname, "../../src/index.js")],
    output: {
      path: dest,
      filename: "server.js"
    },
    plugins: [
      new CleanWebpackPlugin([dest], { root: Path.resolve(__dirname, "..") }),
      new CopyWebpackPlugin([
        {
          from: Path.resolve(__dirname, "../../src/templates"),
          to: "templates"
        }
      ])
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
    },
    stats: true
  };
};
