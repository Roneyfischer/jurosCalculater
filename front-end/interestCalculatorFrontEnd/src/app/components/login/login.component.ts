import { Component } from '@angular/core';
import { UserLoginData } from 'src/app/interfaces/user/user-login-data';
import { LoginService } from 'src/app/service/user/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  userLoginData: UserLoginData = {
    type: '',
    username: '',
    password: '',
  };

  URL = 'auth';

  subscribReturn = async (data: any) => {
    console.log(data);
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
