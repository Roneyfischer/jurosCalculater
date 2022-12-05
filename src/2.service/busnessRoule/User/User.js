import cryptoArgon2 from "../Cryptography/cryptography.js";
import verifys from "../verifys/verifys.js";
import dbMethod from "../../../1.model/DAL/dbMethod.js";

const userLoginService = async (reqBody, res) => {
  try {
    const username = reqBody.username;
    const password = reqBody.password;
    const table = "users";
    const dataToFindName = "username";
    const dataToFindValue = [username];
    const dataToReturn = "password";

    const longHash = (
      await dbMethod.read(table, dataToFindName, dataToFindValue, dataToReturn)
    ).dataFinded[0].password;

    return cryptoArgon2.verify(password, longHash);
  } catch (error) {
    return res.status(401).json({ message: "User not found" });
  }
};

const userRegisterService = async (reqBody, res) => {
  console.log("> [userService.register]");

  const { username, password } = await reqBody;
  const passEncrypted = await cryptoArgon2.encrypt(password);

  const table = "users";
  const fieldName = `"username", "password"`;
  const fieldValue = [username, passEncrypted];

  const teste = await dbMethod.add(table, fieldName, fieldValue);
  return { status: teste.status, message: teste.message };
};

export default { userLoginService, userRegisterService };
