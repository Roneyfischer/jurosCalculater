import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import cookie from 'cookiejs';
import { TokenValidationService } from 'src/app/service/user/tokenValidation/token-validation.service';

@Injectable({
  providedIn: 'root',
})
export class DrashBoardLoadGuard implements CanActivate {
  constructor(private tokenValidationService: TokenValidationService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = cookie('access_token');

    const reqData = { type: 'tokenValidation', token: token };

    const URL = 'auth';

    const postHttp = this.tokenValidationService.postHttp(reqData, URL);

    const teste = postHttp.subscribe((resData: any) => {
      console.log('Retorno do subscribe abaixo: ');
      const canAccess = resData.status;
      return true;
    });

    return false;
  }
}
