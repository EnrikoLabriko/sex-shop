const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projectRootPath = path.resolve(__dirname, '..');
const assetsPath = path.resolve(projectRootPath, 'build');
const sourcePath = path.resolve(projectRootPath, 'src');

const limit = 10240;

module.exports = {
  watch: true,
  devtool: 'inline-source-map',
  context: sourcePath,
  entry: {
    main: '../src/index.js',
  },
  output: {
    filename: '[name].js',
    path: assetsPath,
    publicPath: '/build/',
  },
  performance: {
    hints: false,
  },
  devServer: {
    port: 3000,
    contentBase: assetsPath,
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'],
          },
        }],
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'stylus-loader',
          },
        ],
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit,
          mimetype: 'application/octet-stream',
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit,
          mimetype: 'application/vnd.ms-fontobject',
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit,
          mimetype: 'image/svg+xml',
        },
      },
    ],
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: ['.json', '.js', '.styl'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Thinknetica project',
      filename: 'index.html',
      template: '../src/template.html',
    }),
  ],
};
