import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenValidationService {
  constructor(private http: HttpClient) {}

  postHttp(reqData: any, URL: string) {
    console.log('> [LoginService.postHttp]. Data:');
    console.log(reqData);

    return this.http.post(`http://127.0.0.1:3333/${URL}`, reqData);
  }
}
