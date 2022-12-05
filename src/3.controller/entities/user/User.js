import userService from "../../../2.service/busnessRoule/User/User.js";
import setCookie from "../../../2.service/busnessRoule/User/token-cookie/token-cookie.js";
import interestService from "../../../2.service/busnessRoule/interest/interest.js";
const userController = {
  userLogin: async (reqBody, res) => {
    const loginResult = await userService.userLoginService(reqBody, res);
    if (loginResult.status) {
      return setCookie(reqBody, res);
    }

    return res.status(401).json(loginResult);
  },

  userRegister: async (reqBody, res) => {
    return userService.userRegisterService(reqBody, res);
  },

  interestSetTransactionRate: async (reqBody) => {
    interestService.rateSetTransaction(reqBody);
  },

  interestSetMonthRate: async (reqBody) => {
    interestService.rateSetMonth(reqBody);
  },
};

export default userController;
