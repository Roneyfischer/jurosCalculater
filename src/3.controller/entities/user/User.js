import User from "../../../2.service/busnessRoule/User/User.js";
const req = {
  userName: "user",
  password: "pass",
};

const res = { res: "teste res" };

User.userLogin(req, res);
