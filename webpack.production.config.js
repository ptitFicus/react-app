const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': [
      './src/main.js'
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'es6', 'scss']
  },
  output: {
    path: './static/',
    publicPath: '/static/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__DEV__': process.env.NODE_ENV || false
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
        loaders: [ExtractTextPlugin.extract(['css', 'sass'])]
      }
    ]
  }
};
