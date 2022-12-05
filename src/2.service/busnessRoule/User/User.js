import cryptoArgon2 from "../Cryptography/cryptography.js";
import verifys from "../verifys/verifys.js";
import dbMethod from "../../../1.model/DAL/dbMethod.js";

const userLoginService = function (reqBody, res) {
  const userName = req.userName;
  const password = req.password;
  const table = "users";
  const dataToFindName = "user";
  const dataToFindValue = userName;
  const dataToReturn = "password";

  const longHash = dbMethod.read(
    table,
    dataToFindName,
    dataToFindValue,
    dataToReturn
  );

  return cryptoArgon2.encrypt(password, longHash);
};

export default userLoginService;
