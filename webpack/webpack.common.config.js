import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import { publicDir, buildDir, sourceDir } from '../config/paths';

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(sourceDir, './index.html'),
  filename: path.resolve(buildDir, './index.html'),
});

const config = {
  entry: './app/index.js',
  output: {
    path: buildDir,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};

export default config;
