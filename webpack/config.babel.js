import path from 'path';

import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

const rootDir = path.join(__dirname, '..');
const env = process.env.NODE_ENV || 'development';
const isDevEnv = env === 'development';

export default {
  devtool: getDevtool(),
  entry: getEntry(),
  output: getOutput(),
  resolve: getResolve(),
  plugins: getPlugins(),
  module: getModule()
};

function getDevtool() {
  return isDevEnv ?
    'cheap-module-eval-source-map' :
    'cheap-module-source-map';
}

function getEntry() {
  return path.join(rootDir, 'src/client');
}

function getOutput() {
  return {
    publicPath: '/assets/',
    path: path.join(rootDir, 'public/assets'),
    filename: 'app.js'
  };
}

function getResolve() {
  return {
    extensions: ['', '.js']
  };
}

function getPlugins() {
  const plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ];
  if (!isDevEnv) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    );
  }
  return plugins;
}

function getModule() {
  return {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss',
          'sass'
        ]
      }
    ],
    postcss: [autoprefixer]
  };
}
