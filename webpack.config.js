var webpack = require('webpack');
var path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractText = new ExtractTextPlugin({
  filename: "[name].css"
})

/**
 * devtool: provides Errors with Line Numbers
 */
module.exports = {
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 9000,
    hot: true
  },
  entry: {
    index: './src/index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'react-hot-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['react' , 'es2015']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractText.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(hbs|handlebars)$/,
        use: [
          {
            loader: 'handlebars-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    extractText,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Something Else...',
      filename: 'index.html',
      template: 'src/index.hbs'
    })
  ]
}
