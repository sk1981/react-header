'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack/webpack-config.base');

module.exports = merge(webpackCommon, {
  entry: {
    "react-header.min": ['./src/main'],
    "react-header-style.min": ['./style/main.scss']
  },
  externals:  {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /(\.min\.)/
    })
  ]
});