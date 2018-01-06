const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const { 
  ENV, IS_PRODUCTION,
  IS_DEV, dir, IS_PROD_TEST , IS_STAGING, IS_STAGE_TEST
} = require('./helpers');

module.exports = function(options = {}) {
  return {
    context: dir(),
    resolve: {
      extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
      modules: [
        'node_modules',
        dir('src'),
      ]
    },
    performance: {
      hints: false
    },
    output: {
      path: dir('dist'),
      publicPath: 'dist/',
      // Following naming of files, with ?v=VERSION, helps in versioning the files with a CI...
      filename: '[name].js' + (process.env.APP_VERSION ? '?v='+process.env.APP_VERSION : ''),
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      exprContextCritical: false,
      rules: [
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg|gif)$/,
          loader: 'url-loader',
          query: {
            limit: '100000'
          }
        },
        // Exclude is required due to https://github.com/jantimon/html-webpack-plugin/issues/747
        // and https://github.com/gdi2290/NG6-starter/issues/234
        {
          test: /\.html$/,
          exclude: /index\.html$/,
          loader: 'raw-loader'
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'to-string-loader' }, 
            { loader: 'css-loader' },
            { loader: 'postcss-loader' }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'to-string-loader' }, 
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { 
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // new ExtractTextPlugin('[name].css'),
      new ProgressBarPlugin({
        format: '  Building ' + chalk.red('[:bar]') + ' | ' + chalk.green(':percent') + ' (:elapsed seconds) || ' + chalk.blue(':msg'),
        clear: false
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        ENV: ENV,
        IS_PRODUCTION: IS_PRODUCTION,
        IS_PROD_TEST: IS_PROD_TEST,
        IS_STAGING: IS_STAGING,
        IS_STAGE_TEST: IS_STAGE_TEST,
        APP_VERSION: JSON.stringify(process.env.APP_VERSION ? 'AngularApp-v'+process.env.APP_VERSION : 'AngularApp-dev-build'),
        IS_DEV: IS_DEV,
        HMR: options.HMR,
        environment: options.environment
      }),
      new CopyWebpackPlugin([
        { from: 'assets', to: 'assets' }
      ]),
      new webpack.LoaderOptionsPlugin({
        options: {
          context: dir(),
          tslint: {
            emitErrors: false,
            failOnHint: false,
            resourcePath: 'src'
          },
          postcss: function() {
            return [ autoprefixer ];
          }
        }
      })
    ]
  };

};
