import { Component } from '@angular/core';
import { InterestViewService } from 'src/app/service/interest-view.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {
  IdataToGetInterest,
  IreturnInterestView,
} from 'src/app/interfaces/return-interest-view';

@Component({
  selector: 'app-view-intesrest',
  templateUrl: './view-intesrest.component.html',
  styleUrls: ['./view-intesrest.component.css'],
})
export class ViewIntesrestComponent {
  constructor(private interestViewService: InterestViewService) {}
  priceOnDebit = 112;
  priceOnCash = 110;
  priceOnPix = 100;

  totalValue!: number;
  downPaymentOn!: number;
  installmentsNumber!: number;

  payValue!: IreturnInterestView;
  // = {
  //   priceInCash: 0,
  //   priceInDebit: 0,
  //   priceInPix: 0,
  //   priceInCredit: [
  //     {
  //       installmentsValue: 0,
  //       installmentNumber: 0,
  //       totalValue: 0,
  //     },
  //   ],
  // };

  dataToGetInterest: IdataToGetInterest = {
    totalValue: 0,
    downPaymentOn: 0,
    installmentsNumber: 0,
  };

  payValueSet = (abc: IreturnInterestView): void => {
    this.payValue = abc;
  };

  URL = `interestCalculate`;

  getPayValues() {
    this.interestViewService.postHttp(
      this.dataToGetInterest,
      this.URL,
      this.payValueSet
    );
  }
}
