'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack-config.base');

module.exports = merge(webpackCommon, {
  entry: {
    "app.min": ['./src/index', './style/main.scss']
  },
  externals:  {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min.*/
    })
  ]
});