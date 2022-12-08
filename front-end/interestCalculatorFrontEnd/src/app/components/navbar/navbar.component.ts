import { Component } from '@angular/core';
import cookie from 'cookiejs';
import { TokenValidationComponent } from '../user/token-validation/token-validation.component';
import { UserComponent } from '../user/user/user.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private userComponent: UserComponent,
    private tokenValidationComponent: TokenValidationComponent
  ) {}
  // tokenValidationComponent = new TokenValidationComponent();

  userLoginStatus: boolean = this.tokenValidationComponent.userLoginStatus();

  logout() {
    this.userComponent.logout();
  }
}
