import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  postHttp(reqData: any, URL: string, subscribReturn: any) {
    console.log('> [LoginService.postHttp]. Data:');
    console.log(reqData);

    this.http
      .post(`http://127.0.0.1:3333/${URL}`, reqData)
      .subscribe((resData: any) => {
        console.log(resData);
        return subscribReturn(resData);
      });
  }
}
