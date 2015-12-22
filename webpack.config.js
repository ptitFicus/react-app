const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
// Useless, imported by Neat: var bourbon = require('node-bourbon').includePaths;
// Note: I changed some var/arg names.
const sassNeatPaths = require('node-neat').includePaths;

const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'app': [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/main.js'
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'es6', 'scss']
  },
  output: {
    path: __dirname + 'static/',
    publicPath: '/static/',
    filename: 'app.js',
    hot: true,
    library: 'App',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__DEV__': process.env.NODE_ENV || false
    }),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch' // À injecter uniquement dans main.js
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js|\.jsx|\.es6$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css', 'sass'])
      }
    ]
  },
  cssLoader: {
    sourceMap: true
  },
  sassLoader: {
    sourceMap: true,
    includePaths: [path.resolve(__dirname, './src/styles')].concat(sassNeatPaths)
  }
};
