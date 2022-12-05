import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { IreturnInterestView } from '../interfaces/return-interest-view';
@Injectable({
  providedIn: 'root',
})
export class InterestViewService {
  constructor(private http: HttpClient) {}

  postHttp(reqData: any, URL: any, teste: any) {
    console.log('> [view service]. Data abaixo:');
    console.log(reqData);

    this.http
      .post(`http://127.0.0.1:3333/${URL}`, reqData)
      .subscribe((resData: any) => {
        const retunInterestView: IreturnInterestView = resData;
        teste(retunInterestView);
        console.log('> [InterestViewService.subscribe]. Data:');
        console.log(resData);
        return retunInterestView;
      });
  }
}
