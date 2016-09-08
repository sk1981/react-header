'use strict';
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpackBase = require('./../webpack/webpack-base');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const parentDir = path.join(__dirname, '..');

module.exports = {
  output: {
    path: path.join(__dirname),
    libraryTarget: 'umd',
    filename: '[name]-bundle.js',
    library: "ex"
  },
  entry: {
    'build/basic/app': ['./basic/index.js'],
    'build/styling/app': ['./styling/index.js', './styling/main-light.scss'],
    'build/sticky-header/app': ['./sticky-header/index.js']
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-header": "ReactHeader"
  },
  module: {
    loaders: [
      webpackBase.jsLoader,
      webpackBase.styleLoader
    ]
  },
  postcss: [
    autoprefixer({browsers: ['last 3 versions']})
  ],
  resolve: {
    modulesDirectories: ["../node_modules", "../dist"]
  },
  eslint: {
    configFile: '../.eslintrc'
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new CopyWebpackPlugin([
      {
        context: '../dist',
        from: '**',
        to: './lib'
      }
    ], {
      copyUnmodified: true
    })
  ]
};
