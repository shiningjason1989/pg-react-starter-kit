import path from 'path';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
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
  const entries = [path.join(rootDir, 'src/client')];
  if (isDevEnv) {
    entries.unshift(
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server'
    );
  }
  return entries;
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
  if (isDevEnv) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  } else {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin('app.css', { allChunks: true })
    );
  }
  return plugins;
}

function getModule() {
  const sassLoaders = [
    'style',
    'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
    'postcss',
    'sass'
  ];

  return {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: isDevEnv ?
          sassLoaders.join('!') :
          ExtractTextPlugin.extract(sassLoaders[0], sassLoaders.slice(1).join('!'))
      }
    ],
    postcss: [autoprefixer]
  };
}
