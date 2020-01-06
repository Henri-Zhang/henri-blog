const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = {
  // entry: path.resolve(__dirname, '../src/entry-client.js'),
  output: {
    filename: 'static/bundle.[hash].js',
    chunkFilename: 'static/[id].chunk.[hash].js',
    hashDigestLength: 8,
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.less', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpe?g|png|svg|ttf|pdf|mov)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: 'static/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 244 * 1024,
      name: true,
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      favicon: './src/assets/favicon.ico',
    }),
    new VueSSRClientPlugin(),
  ],
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
};
