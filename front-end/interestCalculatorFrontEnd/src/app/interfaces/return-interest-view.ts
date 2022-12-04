export interface IreturnInterestView {
  priceInCash: number;
  priceInDebit: number;
  priceInPix: number;
  priceInCredit: IpriceInCredit[];
}

export interface IpriceInCredit {
  installmentsValue: number;
  installmentNumber: number;
  totalValue: number;
}
