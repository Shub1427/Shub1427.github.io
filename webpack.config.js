switch (process.env.NODE_ENV) {
  case 'prod':
  case 'prod_test':
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test');
    break;
  case 'stage':
  case 'staging':
  case 'stage_test':
      module.exports = require('./config/webpack.stage');
      break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev');
}
