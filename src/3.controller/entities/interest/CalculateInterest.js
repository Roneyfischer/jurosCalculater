import routerPriceCalculator from "../../../2.service/busnessRoule/interestCalcalute/viewInterestCalcalute.js";

const priceCalculator = async (reqBody) => {
  const { totalValue, downPaymentOn, installmentsNumber } = reqBody;
  console.log("Requisicao: " + totalValue, downPaymentOn, installmentsNumber);

  const priceInCash = await routerPriceCalculator.calculatePriceInCash(
    totalValue
  );

  const priceInDebit = await routerPriceCalculator.calculatePriceInDebit(
    totalValue
  );

  const priceInPix = await routerPriceCalculator.calculatePriceInPix(
    totalValue
  );

  const priceInCredit = await routerPriceCalculator.calculatePriceInCredit(
    totalValue,
    downPaymentOn,
    installmentsNumber
  );

  return {
    priceInCash: priceInCash,
    priceInDebit: priceInDebit,
    priceInPix: priceInPix,
    priceInCredit: priceInCredit,
  };
};

export default priceCalculator;
