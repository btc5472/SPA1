import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { OKTA_CONFIG, OktaAuthModule, OktaCallbackComponent, OktaAuthGuard, } from '@okta/okta-angular';
import { OktaLoginRedirectComponent } from '@okta/okta-angular';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SolarSystemsComponent } from './solar-systems/solar-systems.component';
import { ExoplanetsComponent } from './exoplanets/exoplanets.component';
import { LoginComponent } from './login/login.component';
import { ParentSsDetailsComponent } from './parent-ss-details/parent-ss-details.component';
import { PlanetsOfSsComponent } from './planets-of-ss/planets-of-ss.component';
import { SolarSystemWithExoplanetsComponent } from './solar-system-with-exoplanets/solar-system-with-exoplanets.component';

/*const CALLBACK_PATH = 'login/callback';

const appRoutes: Routes = [
  {
    path: CALLBACK_PATH,
    component: OktaCallbackComponent,
    // Later: Add a component
  },
  {
    path: 'exoplanets',
    component: ExoplanetsComponent,
    canActivate: [ OktaAuthGuard ],
  },
  // Other routes...
];*/

const config = {
  clientId: '{0oa29u625Xdq0LIAk5d6}',
  issuer: 'https://${https://dev-9662063.okta.com}/oauth2/default',
  redirectUri: 'https://localhost:44302/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SolarSystemsComponent,
    ExoplanetsComponent,
    LoginComponent,
    ParentSsDetailsComponent,
    PlanetsOfSsComponent,
    SolarSystemWithExoplanetsComponent
    //OktaCallbackComponent // Commenting this line out makes it so my homepage loads without "Loading..."
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    OktaAuthModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login/callback', component: OktaCallbackComponent },
      { path: 'login', component: /*OktaLoginRedirectComponent*/ LoginComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'solar-systems', component: SolarSystemsComponent },
      { path: 'exoplanets', component: ExoplanetsComponent },
      { path: 'solar-systems/:id', component: SolarSystemWithExoplanetsComponent}
      //{ path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
