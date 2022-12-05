import dbMethod from "../../../1.model/DAL/dbMethod.js";

const interestService = {
  rateSetTransaction: async (reqBody) => {
    console.log("> [interestService]");

    const { itenToSearch, itenToUpdate } = await reqBody;

    const table = "paymentrate";
    const nameItenToSearch = "transactionType";
    const valueItenToSearch = [reqBody.transactionTypeName];
    const nameItenToUpdate = "transactionPercentage";
    const valueItenToUpdate = [reqBody.newPercentage];

    return dbMethod.update(
      table,
      nameItenToSearch,
      valueItenToSearch,
      nameItenToUpdate,
      valueItenToUpdate
    );
  },
  rateSetMonth: async (reqBody) => {
    console.log("> [interestService]");

    const { itenToSearch, itenToUpdate } = await reqBody;

    const table = "paymentrate";
    const nameItenToSearch = "transactionType";
    const valueItenToSearch = [reqBody.transactionTypeName];
    const nameItenToUpdate = "monthPercentage";
    const valueItenToUpdate = [reqBody.newPercentage];

    return dbMethod.update(
      table,
      nameItenToSearch,
      valueItenToSearch,
      nameItenToUpdate,
      valueItenToUpdate
    );
  },
};

export default interestService;
