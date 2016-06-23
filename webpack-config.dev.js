'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-config.base');

module.exports = merge(webpackCommon, {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    })
  ]
});