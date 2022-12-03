import dbMethod from "../../../1.model/DAL/dbMethod.js";

const routerPriceCalculator =  {
  calculatePriceInCasch: async (totalValue) => {
    const table = `discountRate`;
    const dataToFind = `casch`;
    const dataToReturn = `discountPercentage`;

    const discountPercentage = await dbMethod.read(table, dataToFind, dataToReturn);

    const finalPrice = totalValue * ((100 - discountPercentage) / 100);
    return finalPrice;
  },

  calculatePriceInPix :async (totalValue) => {
    const dataToFindName = `transactionType`;
    const dataToFindValue = `pix`;
    const dataToReturn = `discountPercentage`;

    const discountPercentage = await dbMethod.read(table, dataToFindName, dataToFindValue, dataToReturn);

    const finalPrice = totalValue * ((100 - discountPercentage) / 100);
    return finalPrice;
  },

  calculatePriceInDebit :async (totalValue) => {
    const table = `discountRate`;
    const dataToFindName = `transactionType`;
    const dataToFindValue = `debit`;
    const dataToReturn = `discountPercentage`;

    const discountPercentage = await dbMethod.read(table, dataToFindName, dataToFindValue, dataToReturn);

    const finalPrice = totalValue * ((100 - discountPercentage) / 100);
    return finalPrice;
  },

  calculatePriceInCredit : async (totalValue, downPaymentOn, installmentsNumber) => {
    const table = `rateInterest`;
    const dataToFindName = `interestType`;
    const dataToReturn = `percentage`;

    const initialInterest = await dbMethod.read(table, dataToFindName, `initialInterest`, dataToReturn);
    const monthInterest = await dbMethod.read(table, dataToFindName, `monthInterest`, dataToReturn);

    const valueToPay = totalValue - downPaymentOn;

    let finalPrice = [];
    console.log(valueToPay * 100);
    console.log(transactionInterest + monthInterest * 5);

    for (let i = 1; i <= installmentsNumber; i++) {
      finalPrice.push({
        InstallmentsValue: (valueToPay * 100) / (100 - (transactionInterest + monthInterest * (i - 1))) / i,
        totalValue: (valueToPay * 100) / (100 - (transactionInterest + monthInterest * i)),
      });
    }

    return finalPrice;
  },
};

console.log(routerPriceCalculator.calculatePriceInCredit);

export default routerPriceCalculator;
