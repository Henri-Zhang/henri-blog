const path = require('path');
const merge = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const base = require('./webpack.base');

module.exports = merge(base, {
  entry: path.resolve(__dirname, '../src/entry-client.js'),
  output: {
    filename: 'static/bundle.[hash].js',
    chunkFilename: 'static/[id].chunk.[hash].js',
    hashDigestLength: 8,
    path: path.resolve('dist'),
  },
  plugins: [new VueSSRClientPlugin()],
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    useLocalIp: true,
    open: true,
    quiet: true,
    progress: true,
    compress: true,
    port: 9000,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});
