var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index',
    './style/main.scss'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-es2015-function-name']
        }
      },,
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}

