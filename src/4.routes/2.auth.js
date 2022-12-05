import express from "express";
import app from "../0.config/server/app.js";
import priceCalculator from "../3.controller/entities/interest/CalculateInterest.js";
import userLoginController from "../3.controller/entities/user/User.js";

const auth = express.Router();

auth.post("/", async (req, res) => {
  console.log("> [route.interestCalculateRoute]");

  return res.status(200).json(await userLoginController(req.body, res));
});

export default auth;