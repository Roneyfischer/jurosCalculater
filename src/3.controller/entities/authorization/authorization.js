import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {
  const token = req.headers["access_token"];

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) return res.status(401).end();

    req.body.username = decoded.username;

    if (err) {
      return res
        .status(401)
        .json({ status: false, message: `Error on verifty token$: ${err}` });
    }
    return next();
  });
};

const tokenValidation = async (token, res) => {
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) return res.status(401).end();

    if (err) {
      return res
        .status(200)
        .json({ status: false, message: `Error on verifty token$: ${err}` });
    }
    return res
      .status(200)
      .json({ status: true, message: `Token has ben validated` });
  });
};

export default { verifyJWT, tokenValidation };
