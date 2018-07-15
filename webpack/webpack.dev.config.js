import merge from 'webpack-merge';

import common from './webpack.common.config';

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  }
};

export default merge(common, devConfig);
