const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpackBase = require("./webpack-base");

module.exports = {
  entry: {
    "react-header": ['./src/main'],
    "react-header-style": ['./style/main.scss']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    libraryTarget: 'umd',
    filename: '[name].js',
    library: 'ReactHeader',
    umdNamedDefine: true
  },
  module: {
    preLoaders: [
      { test: /\.js?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      webpackBase.jsLoader,
      webpackBase.styleLoader
    ]
  },
  postcss: [
    autoprefixer({browsers: ['last 3 versions']})
  ],
  eslint: {
    failOnWarning: false,
    failOnError: true,
    configFile: '.eslintrc'
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new StyleLintPlugin({
      failOnError: false,
      files: 'style/**/*.s?(a|c)ss',
      syntax: 'scss'
    })
  ]
};

