import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  userName: string;
  isAuthenticated: boolean;
  error: Error;

  constructor(public oktaAuth: OktaAuthService, public router: Router) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  async login() {
    try {
      await this.oktaAuth.signInWithRedirect();
    } catch (err) {
      console.error(err);
      this.error = err;
    }
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.isAuthenticated) {
      const userClaims = await this.oktaAuth.getUser();
      this.userName = userClaims.name;
    }
  }

}
