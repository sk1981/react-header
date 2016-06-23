var webpackConfig = require('./webpack-config.test');

// module.exports = function (config) {
//   config.set({
//     browsers: [ 'PhantomJS' ],
//     singleRun: true,
//     frameworks: [ 'mocha', 'chai',
//       // 'sinon', 'sinon-chai'
//     ],
//     files: [
//       'tests.webpack.js'
//     ],
//     plugins: [
//       'karma-chai',
//       'karma-mocha',
//       // 'karma-sourcemap-loader',
//       'karma-webpack',
//       'karma-mocha-reporter',
//       // 'karma-sinon',
//       // 'karma-sinon-chai'
//     ],
//     preprocessors: {
//       'webpack-config.test.js': [ 'webpack' ]
//     },
//     reporters: [ 'mocha' ],
//     webpack: webpackConfig,
//     webpackServer: {
//       noInfo: true
//     },
//     autoWatch: true
//   });
// };

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    reporters: [
      'progress',
      'coverage'
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
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage'
    ],
    remapIstanbulReporter: { // fixme
      src: './istanbul/report.json',
      reports: {
        html: './istanbul/report'
      }
    }
  })
}