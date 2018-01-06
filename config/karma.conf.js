// Karma configuration
// Generated on Mon Dec 25 2017 19:18:37 GMT+0530 (IST)

const testWebpackConfig = require('./webpack.test');

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
      { pattern: './config/spec-bundle.js', watched: false }
    ],
    preprocessors: { 
      './config/spec-bundle.js': ['webpack', 'sourcemap'] 
    },

    webpack: testWebpackConfig({ env: 'test' }),
    webpackMiddleware: { stats: 'errors-only'},

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
