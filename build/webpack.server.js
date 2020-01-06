const path = require('path');
const merge = require('webpack-merge');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const base = require('./webpack.base');

module.exports = merge(base, {
  entry: path.resolve(__dirname, '../src/entry-server.js'),
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].server.js',
    path: path.resolve('dist'),
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [new VueSSRServerPlugin()],
});
