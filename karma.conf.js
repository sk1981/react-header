var webpackConfig = require('./webpack-config.test');

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    reporters: [
      'progress',
      'coverage',
      'spec'
    ],
    files: [
      './test/**/*spec.js'
    ],
    preprocessors: {
      './test/**/*.js': ['webpack', 'coverage'],
      './src/**/*.js': ['webpack', 'coverage']

    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: 'errors-only'
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-spec-reporter',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jsdom-launcher',
      'karma-coverage'
    ],
    remapIstanbulReporter: { // fixme
      src: './istanbul/report.json',
      reports: {
        html: './istanbul/report'
      }
    }
  })
};