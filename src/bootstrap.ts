import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare var environment;
declare var APP_VERSION: any;

if (environment.production) {
  // Will never run for production, as it requires the AOT Compilation Bootstrap...
  enableProdMode();
}

console.info("IS_PROD:", environment.production, ", Release:", APP_VERSION);

platformBrowserDynamic().bootstrapModule(AppModule);
