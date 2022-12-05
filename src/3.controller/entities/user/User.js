import userService from "../../../2.service/busnessRoule/User/User.js";

const userController = {
  userLogin: async (reqBody, res) => {
    return userService.userLoginService(reqBody, res);
  },

  userRegister: async (reqBody, res) => {
    return userService.userRegisterService(reqBody, res);
  },
};

export default userController;
