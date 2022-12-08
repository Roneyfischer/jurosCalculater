import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/components/login/login.component';
import cookie from 'cookiejs';
import { LoginService } from 'src/app/service/user/login/login.service';
import { TokenValidationService } from 'src/app/service/user/tokenValidation/token-validation.service';
import { Router, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DrashBoardGuard implements CanActivate {
  constructor(
    private tokenValidationService: TokenValidationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = cookie('access_token');

    if (token) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
