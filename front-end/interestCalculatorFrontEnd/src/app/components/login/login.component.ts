import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import cookie from 'cookiejs';

import { UserLoginData } from 'src/app/interfaces/user/user-login-data';
import { LoginService } from 'src/app/service/user/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService, private route: Router) {}

  userLoginData: UserLoginData = {
    type: '',
    username: '',
    password: '',
  };

  URL = 'auth';

  subscribReturn = async (data: any) => {
    console.log(data);
    if (!data.status) {
      alert(`${data.message}`);
      return this.route.navigate([`/login`]);
    }

    const date = new Date();
    date.setTime(date.getTime() + 3 * 24 * 60 * 60 * 1000);
    document.cookie = `access_token=${data.token}; expires=${date}`;

    return this.route.navigate([`drashBoard`]);
  };

  userLogin() {
    this.userLoginData.type = `userLogin`;
    console.log(this.userLoginData);
    this.loginService.postHttp(
      this.userLoginData,
      this.URL,
      this.subscribReturn
    );
  }
}
