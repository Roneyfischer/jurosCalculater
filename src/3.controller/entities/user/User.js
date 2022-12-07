import userService from "../../../2.service/busnessRoule/User/User.js";
import setCookie from "../../../2.service/busnessRoule/User/token-cookie/token-cookie.js";
import interestService from "../../../2.service/busnessRoule/interest/interest.js";
import authorization from "../authorization/authorization.js";
const userController = {
  userLogin: async (reqBody, res) => {
    const loginResult = await userService.userLoginService(reqBody, res);
    if (loginResult.status) {
      return setCookie(reqBody, res);
    }

    return res.status(401).json(loginResult);
  },

  userRegister: async (reqBody, res) => {
    const addUserOndDb = await userService.userRegisterService(reqBody, res);

    if (!addUserOndDb) {
      res.status(401).json(addUserOndDb);
    }
    res.status(200).json(addUserOndDb);
  },

  interestSetTransactionRate: async (reqBody) => {
    interestService.rateSetTransaction(reqBody);
  },

  interestSetMonthRate: async (reqBody) => {
    interestService.rateSetMonth(reqBody);
  },

  tokenValidation: async (reqBody, res) => {
    return authorization.tokenValidation(reqBody.token, res);
  },
};

export default userController;
