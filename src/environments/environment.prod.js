const { IS_PROD_TEST, IS_PRODUCTION } = require("../../config/helpers");

/**
 * Properties File...
 * All General Properties specific to Reports...
 */

var _environment = {
  production: true
}

if (IS_PRODUCTION) {
  console.log("---------------" + " Production Build Started " + "---------------");
} else {
  console.log("---------------" + " Production[TEST] Build Started " + "---------------");
}

module.exports =  _environment;
