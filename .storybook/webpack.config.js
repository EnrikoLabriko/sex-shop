const path = require('path');

const projectRootPath = path.resolve(__dirname, '..');

module.exports = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        include: path.resolve(projectRootPath, 'src'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'stylus-loader',
          }
        ],
      }
    ]
  }
};
