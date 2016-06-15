var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

config.entry = {
  'v-affix': path.resolve(__dirname, './src/Affix.vue')
};

config.output = {
  path: path.resolve(__dirname, './dist'),
  filename: '[name].js',
  library: 'VAffix',
  libraryTarget: 'umd'
};

delete config.devtool;

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env.NODE_ENV)
  })
]);

module.exports = config;
