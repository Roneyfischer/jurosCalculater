import express from "express";
import app from "../0.config/server/app.js";
import verifyJWT from "../3.controller/entities/authorization/authorization.js";
import priceCalculator from "../3.controller/entities/interest/CalculateInterest.js";
import userController from "../3.controller/entities/user/User.js";
const loggedArea = express.Router();

loggedArea.post("/", verifyJWT, async (req, res) => {
  console.log("> [route.loggedArea]");

  return res.status(200).json(userController[req.body.type](req.body));
});

export default loggedArea;
