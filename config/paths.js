const path = require('path');

export const sourceDir = path.resolve(__dirname, '../', 'app');
export const buildDir = path.resolve(__dirname, '../', 'dist');
export const publicDir = path.resolve(__dirname, '../', 'public');

export default {
  buildDir,
  publicDir
};
