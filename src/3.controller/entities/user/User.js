import userLoginService from "../../../2.service/busnessRoule/User/User.js";

const userLoginController = async (reqBody, res) => {
  return userLoginService(reqBody, res);
};

export default userLoginController;
