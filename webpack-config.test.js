'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack/webpack-config.base');

module.exports = merge(webpackCommon, {
  entry: {
    "react-header": ['./src/index'],
    "react-header-style": ['./style/main.scss']
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  eslint: {
    configFile: 'test/.eslintrc'
  },
  devtool: 'inline-source-map'

});