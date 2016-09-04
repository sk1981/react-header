'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack/webpack-config.base');

module.exports = merge(webpackCommon, {
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  devtool: 'inline-source-map'
});