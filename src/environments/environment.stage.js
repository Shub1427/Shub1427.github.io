const { IS_STAGING, IS_STAGE_TEST } = require("../../config/helpers");

/**
 * Properties File...
 * All General Properties specific to Reports...
 */

var _environment = {
  production: false
}

if (IS_STAGING) {
  console.log("---------------" + " Stage Build Started " + "---------------");
} else {
  console.log("---------------" + " Stage[TEST] Build Started " + "---------------");
}

module.exports =  _environment;