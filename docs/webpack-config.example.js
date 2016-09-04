'use strict';
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const webpackCommon = require('./../webpack-config.base.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');
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
    'build/styling/app': ['./styling/index.js', './styling/main-light.scss'],
    'react-header': [],// override base
    'react-header-style': []// override base

  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-header": "ReactHeader"
  },
  resolve: {
    modulesDirectories: ["../node_modules", "../dist"]
  },
  eslint: {
    configFile: '../.eslintrc'
  },
  plugins: [
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
});
