const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const commonConfig = require('./webpack.common');
const { ENV, dir, IS_STAGING } = require('./helpers');
const environment = require('../src/environments/environment.stage');

module.exports = function(options) {
  var _plugins = [
    new CheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'polyfills'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency',
      title: 'Subroto'
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      files: 'index.html',
      assets: [
        {
          path: 'assets/css/styles.css' + (process.env.APP_VERSION ? '?v='+process.env.APP_VERSION : ''),
          type: 'css'
        },      
      ],
      append: false
    }),
    new WebpackNotifierPlugin({
      excludeWarnings: true
    })
  ];

  // Enable it if Required...
  if (options && options.analyse) {
    _plugins.push( new BundleAnalyzerPlugin(bundleAnalyzerOpt) );
  }

  return webpackMerge(commonConfig({ env: ENV, environment: environment }), {
    devtool: 'source-map',
    entry: {
      'app': './src/bootstrap.ts',
      'main': './src/vendor.ts',
      'polyfills': './src/polyfills.ts'
    },
    module: {
      exprContextCritical: false,
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
          exclude: /(node_modules)/
        },
        {
          enforce: 'pre',
          test: /\.ts$/,
          loader: 'tslint-loader',
          exclude: /(node_modules|release|dist|demo)/
        },
        {
          test: /\.ts$/,
          loaders: [
            'awesome-typescript-loader',
            'angular2-template-loader'
          ],
          exclude: [/\.(spec|e2e|d)\.ts$/]
        }
      ]
    },
    plugins: _plugins
  });

};

bundleAnalyzerOpt = {
  analyzerMode: 'server',
  analyzerHost: '127.0.0.1',
  analyzerPort: 8888,
  reportFilename: dir('stats','report_stage.html'),
  defaultSizes: 'parsed',
  generateStatsFile: true,
  statsFilename: dir('stats', 'stats_Stage.json'),
  logLevel: 'warn'
}