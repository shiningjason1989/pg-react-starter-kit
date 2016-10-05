import path from 'path';

import webpack from 'webpack';

const rootDir = path.join(__dirname, '..');

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(rootDir, 'src/client'),
  output: {
    publicPath: '/assets/',
    path: path.join(rootDir, 'public/assets'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};
