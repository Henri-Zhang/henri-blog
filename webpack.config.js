const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.[hash].js',
    chunkFilename: '[id].chunk.[hash].js',
    hashDigestLength: 8,
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
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
        use: ['file-loader'],
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
