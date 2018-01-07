const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const commonConfig = require('./webpack.common');
const { ENV, dir, IS_PRODUCTION } = require('./helpers');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ngtools = require('@ngtools/webpack');
var environment = require('../src/environments/environment.prod');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(options) {

  var _plugins = [
    new ngtools.AotPlugin({
      tsConfigPath: 'tsconfig-aot.json',
      entryModule: dir('src', 'app', 'app.module#AppModule'),
      mainPath: dir('src', 'bootstrap.aot.ts'),
      sourceMap: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'polyfills'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency',
      title: 'Subroto'
    }),
    // new HtmlWebpackIncludeAssetsPlugin({
    //   files: 'index.html',
    //   assets: [
    //     {
    //       path: 'assets/css/styles.css' + (process.env.APP_VERSION ? '?v='+process.env.APP_VERSION : ''),
    //       type: 'css'
    //     },       
    //   ],
    //   append: false
    // }),
    new CleanWebpackPlugin(['dist'], {
      root: dir(),
      verbose: false,
      dry: false
    }),
    new UglifyJsPlugin({
      parallel: true,
      uglifyOptions: {
        ie8: false,
        ecma: 5,
        output: {
          comments: false,
          beautify: false,
        },
        warnings: false
      }
    })
  ];

  // Enable it if Required...
  if (options && options.analyse) {
    _plugins.push( new BundleAnalyzerPlugin(bundleAnalyzerOpt) );
  }

  return webpackMerge(commonConfig({ env: ENV, environment: environment }), {
    devtool: 'source-map',
    entry: {
      'app': './src/bootstrap.aot.ts',
      'main': './src/vendor.ts',
      'polyfills': './src/polyfills.ts'
    },
    module: {
      exprContextCritical: false,
      rules: [
        {
          test: /\.ts$/,
          loader: '@ngtools/webpack',
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
  reportFilename: dir('stats','report.html'),
  defaultSizes: 'parsed',
  generateStatsFile: true,
  statsFilename: dir('stats', 'stats.json'),
  logLevel: 'warn'
}
