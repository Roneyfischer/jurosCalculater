import cryptoArgon2 from "../Cryptography/cryptography.js";
import verifys from "../verifys/verifys.js";
import dbMethod from "../../../1.model/DAL/dbMethod.js";

const userLoginService = async (reqBody, res) => {
  const username = reqBody.username;
  const password = reqBody.password;
  const table = "users";
  const dataToFindName = "username";
  const dataToFindValue = [username];
  const dataToReturn = "password";

  const readReturn = await dbMethod.read(
    table,
    dataToFindName,
    dataToFindValue,
    dataToReturn
  );

  if (!readReturn.dataFinded) {
    return { status: false, message: "user not found on DB" };
  }

  console.log(">[userLoginService]. User exist");

  const longHash = readReturn.dataFinded[0].password;
  const passwordVerifyResult = await cryptoArgon2.verify(password, longHash);
  return {
    status: passwordVerifyResult.status,
    message: passwordVerifyResult.message,
  };
};

const userRegisterService = async (reqBody, res) => {
  console.log("> [userService.register]");

  const { username, password } = await reqBody;
  const passEncrypted = await cryptoArgon2.encrypt(password);

  const table = "users";
  const fieldName = `"username", "password"`;
  const fieldValue = [username, passEncrypted];

  const addUserOndDb = await dbMethod.add(table, fieldName, fieldValue);
  return { status: addUserOndDb.status, message: addUserOndDb.message };
};

export default { userLoginService, userRegisterService };
