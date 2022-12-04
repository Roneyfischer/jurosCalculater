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

  payValue: IreturnInterestView = {
    priceInCash: 10,
    priceInDebit: 10,
    priceInPix: 10,
    priceInCredit: [
      {
        installmentsValue: 10,
        installmentNumber: 10,
        totalValue: 10,
      },
    ],
  };

  dataToGetInterest: IdataToGetInterest = {
    totalValue: 0,
    downPaymentOn: 0,
    installmentsNumber: 0,
  };

  teste = (abc: IreturnInterestView) => {
    this.payValue = abc;
  };

  getInstallmentPayment() {
    this.interestViewService.getInterestView(
      this.dataToGetInterest,
      this.teste
    );
  }
}
