import { Component } from '@angular/core';
import cookie from 'cookiejs';
@Component({
  selector: 'app-token-validation',
  templateUrl: './token-validation.component.html',
  styleUrls: ['./token-validation.component.css'],
})
export class TokenValidationComponent {
  tokenValidation(token: string) {
    //lixo
  }

  userLoginStatus(): boolean {
    const token = cookie('access_token');
    if (token) {
      return true;
    }

    return false;
  }
}
