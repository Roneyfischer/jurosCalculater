export interface IreturnInterestRate {
  cashRate: number;
  debitRate: number;
  pixRate: number;
  creditRate: IcreditRate;
}

export interface IcreditRate {
  transactionRate: number;
  monthRate: number;
}

export interface IpostSetInterestRate {
  type: string;
  transactionTypeName: string;
  newRate: number;
}
