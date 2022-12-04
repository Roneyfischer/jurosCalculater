import { Component } from '@angular/core';
import { InterestViewService } from 'src/app/service/interest-view.service';

import { IreturnInterestView } from 'src/app/interfaces/return-interest-view';

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

  dataToGetInterest = {
    totalValue: this.totalValue,
    downPaymentOn: this.downPaymentOn,
    installmentsNumber: 18,
  };

  getInstallmentPayment() {
    return this.interestViewService.getInterestView(this.dataToGetInterest);
  }
}
