var webpackConfig = require('./webpack-config.test');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: [ 'mocha', 'chai',
      // 'sinon', 'sinon-chai'
    ],
    files: [
      'tests.webpack.js'
    ],
    plugins: [
      'karma-chai',
      'karma-mocha',
      // 'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
      // 'karma-sinon',
      // 'karma-sinon-chai'
    ],
    preprocessors: {
      'webpack-config.test.js': [ 'webpack' ]
    },
    reporters: [ 'mocha' ],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    autoWatch: true
  });
};