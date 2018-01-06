import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

// After `ngc` command this ngfactory file gets generated...
// So Following error is useless...
import { AppModuleNgFactory } from '../build/src/app/app.module.ngfactory';


declare var IS_PROD_TEST: boolean;
declare var IS_PRODUCTION: boolean;
declare var APP_VERSION: any;
declare var environment;

if (IS_PROD_TEST || IS_PRODUCTION) {
  console.info("IS_PROD:", environment.production, ", Release:", APP_VERSION);
  enableProdMode();
} else {
  console.info("IS_NOT_PROD, TEST", IS_PROD_TEST);
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).catch(err => console.error(err));
