import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index-page/index.component';
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
  { path: routeBase + '-zero',
    component: ZeroComponent
  },
  { path: routeBase + '-one',
    component: OneComponent
  },
  { path: routeBase + '-two',
    component: TwoComponent
  },
  { path: '',
    component: IndexComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
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
