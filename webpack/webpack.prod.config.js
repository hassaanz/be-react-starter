import merge from 'webpack-merge';

import common from './webpack.common.config';

const prodConfig = {
  mode: 'production',
};

export default merge(common, prodConfig);
