import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const setCookie = async (reqBody, res) => {
  const token = jwt.sign(
    {
      singularUserId: reqBody.username,
    },
    process.env.JWT_KEY,
    {
      expiresIn: 30000,
    }
  );

  res
    .cookie("access_token", "token", {
      secure: true,
      sameSite: "none",
      expire: 500000,
    })
    .status(200)
    .json({
      status: true,
      message: `User has ben logged, and  jwTOken has ben send to frontEnd.`,
      token: token,
    });
};

export default setCookie;
