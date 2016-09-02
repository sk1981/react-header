'use strict';
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const webpackCommon = require('./../webpack-config.base.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const parentDir = path.join(__dirname, '..');

module.exports = merge(webpackCommon, {
  output: {
    path: path.join(__dirname),
    libraryTarget: 'umd',
    filename: '[name]-bundle.js',
    library: "ex"
  },
  entry: {
    'build/basic/app': ['./basic/index.js'],
    // 'build/styling/app': ['./styling/index.js'],
    'react-header': [],// override base
    'react-header-style': []// override base

  },
  externals:  {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-header": "ReactHeader"
  },
  resolve: {
    // alias: {
    //   "ReactHeader": path.join(parentDir, "build", "app-bundle.js"),
    //   "ReactHeaderCSS": path.join(parentDir, "build", "app-styles.css")
    // }
    modulesDirectories: ["../node_modules", "../dist"]
  },
  eslint: {
    configFile: '../.eslintrc'
  },
  // plugins: [new HtmlWebpackPlugin({
  //   filename: [name].html
  // })
  // ]
});
