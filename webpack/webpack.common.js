"use strict";

const Path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const dest = Path.join(__dirname, "../dist");

module.exports = {
  target: "node",
  node: {
    __dirname: true
  },
  externals: [nodeExternals()],
  entry: [
    Path.resolve(__dirname, "./polyfills"),
    Path.resolve(__dirname, "../src/index.js")
  ],
  output: {
    path: dest,
    filename: "server.js",
    publicPath: "/templates"
  },
  plugins: [
    new CleanWebpackPlugin([dest], { root: Path.resolve(__dirname, "..") }),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, "../src/templates"), to: "templates" }
    ])
  ],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src")
    }
  }
};
