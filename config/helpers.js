const path = require('path');

const ENV = process.env.NODE_ENV;
const pkg = require('../package.json');
const ROOT = path.resolve(__dirname, '..');

exports.dir = function(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

exports.ENV = JSON.stringify(ENV);

IS_PRODUCTION = ENV === 'production';
IS_PROD_TEST = ENV === 'prod_test';
exports.IS_PRODUCTION = IS_PRODUCTION;
exports.IS_PROD_TEST = IS_PROD_TEST;

IS_STAGE_TEST = ENV === 'stage_test';
IS_STAGING = ENV === 'stage' || ENV === 'staging';
exports.IS_STAGE_TEST = IS_STAGE_TEST;
exports.IS_STAGING = IS_STAGING;

exports.IS_DEV = ENV === 'dev' || ENV === 'development' || IS_STAGE_TEST || IS_STAGING;
exports.APP_VERSION = JSON.stringify(pkg.version);
