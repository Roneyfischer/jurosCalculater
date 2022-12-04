import dbMethod from "../../../1.model/DAL/dbMethod.js";

const routerPriceCalculator = {
  calculatePriceInCash: async (totalValue) => {
    const table = "paymentrate";
    const dataToFindName = "transactionType";
    const dataToFindValue = ["cash"];
    const dataToReturn = "transactionPercentage";

    const discountPercentage = +(
      await dbMethod.read(table, dataToFindName, dataToFindValue, dataToReturn)
    ).dataFinded[0].transactionPercentage;

    const finalPrice = +(
      totalValue *
      ((100 + discountPercentage) / 100)
    ).toFixed(2);

    return finalPrice;
  },

  calculatePriceInPix: async (totalValue) => {
    const table = `paymentrate`;
    const dataToFindName = `transactionType`;
    const dataToFindValue = [`pix`];
    const dataToReturn = `transactionPercentage`;

    const discountPercentage = +(
      await dbMethod.read(table, dataToFindName, dataToFindValue, dataToReturn)
    ).dataFinded[0].transactionPercentage;

    const finalPrice = +(
      totalValue *
      ((100 + discountPercentage) / 100)
    ).toFixed(2);
    return finalPrice;
  },

  calculatePriceInDebit: async (totalValue) => {
    const table = `paymentrate`;
    const dataToFindName = `transactionType`;
    const dataToFindValue = [`debit`];
    const dataToReturn = `transactionPercentage`;

    const discountPercentage = +(
      await dbMethod.read(table, dataToFindName, dataToFindValue, dataToReturn)
    ).dataFinded[0].transactionPercentage;

    const finalPrice = totalValue * ((100 + discountPercentage) / 100);
    return finalPrice;
  },

  calculatePriceInCredit: async (
    totalValue,
    downPaymentOn,
    installmentsNumber
  ) => {
    const table = `paymentrate`;
    const dataToFindName = `transactionType`;
    const dataToReturn = `percentage`;

    const transactionPercentage = +(
      await dbMethod.read(
        table,
        dataToFindName,
        [`credit`],
        `transactionPercentage`
      )
    ).dataFinded[0].transactionPercentage;

    const monthPercentage = +(
      await dbMethod.read(table, dataToFindName, [`credit`], `monthPercentage`)
    ).dataFinded[0].monthPercentage;

    const valueToPay = totalValue - downPaymentOn;

    console.log(transactionPercentage, monthPercentage);

    let finalPrice = [];

    for (let i = 1; i <= installmentsNumber; i++) {
      finalPrice.push({
        InstallmentsValue: +(
          (valueToPay * 100) /
          (100 - (transactionPercentage + monthPercentage * (i - 1))) /
          i
        ).toFixed(2),
        totalValue: +(
          (valueToPay * 100) /
          (100 - (transactionPercentage + monthPercentage * (i - 1)))
        ).toFixed(2),
      });
    }

    return finalPrice;
  },
};
export default routerPriceCalculator;
