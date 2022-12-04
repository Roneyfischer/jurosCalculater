import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InterestViewService {
  constructor(private http: HttpClient) {}

  getInterestView(reqData: any) {
    return console.log('ok');
    // this.http
    //   .get(`http:127.0.0.1:3333`, reqData)
    //   .subscribe((resData: any) => {
    //     return resData;
    //   });
  }
}
