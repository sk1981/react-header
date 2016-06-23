'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-config.base');

module.exports = merge(webpackCommon, {
  //empty for now - external source map etc
});