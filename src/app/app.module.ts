import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ZeroComponent } from './components/level-zero/zero.component';
import { OneComponent } from './components/level-one/one.component';
import { TwoComponent } from './components/level-two/two.component';

/**
 * =============================================================================
 *        Routes for Different Levels of Components
 *          
 * Taking Base path as /shub1427/{route} : This is required becoz, I may create
 * different Github Pages, which may conflict with these routes...
 * =============================================================================
 */
const routeBase = "shub1427"
const appRoutes: Routes = [
  { path: routeBase + '/zero',
    component: ZeroComponent
  },
  { path: routeBase + '/one',
    pathMatch: 'full',
    component: OneComponent
  },
  { path: routeBase + '/two',
    pathMatch: 'full',
    component: TwoComponent
  },
  { path: '',
    redirectTo: '/' + routeBase + '/zero',
    pathMatch: 'full'
  },
]


@NgModule({
  declarations: [
    AppComponent,
    ZeroComponent,
    OneComponent,
    TwoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
