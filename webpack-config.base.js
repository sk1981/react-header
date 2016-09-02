const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    "react-header": ['./src/main'],
    "react-header-style": ['./style/main.scss']
  },
  output: {
    path: path.join(__dirname, 'dist'),
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
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-es2015-function-name']
        }
      },
      {
        test: /\.s?css?$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!!postcss-loader!sass-loader")
      }
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
      syntax: 'scss'
    })
  ]
};

