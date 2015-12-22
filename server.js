const path = require('path');
const webpack = require('webpack');
const express = require('express');

const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(8080, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8080');
});
