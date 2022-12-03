import cryptography from "../Cryptography/cryptography.js";
import verifys from "../verifys/verifys.js";
import dbMethod from "../../../1.model/DAL/dbMethod.js";

const userLogin = function (req, res) {
  const userName = req.userName,
    password = req.password;
  const table = "users";
  const dataToReturn = "password";
  const dataToFind = "user";

  const savedPasswordOnDb = dbMethod.read(table, dataToFind, dataToReturn);
  const encryptedPasswordByReq = cryptography.encryptArgon2i(req.password);
    

  const passwordMath = verifys.verifyTwoDataMatch(savedPasswordOnDb, encryptedPasswordByReq);
  if (passwordMath) {
    return { message: "user has been logged" };
  }
  return false;
};

export default { userLogin };
