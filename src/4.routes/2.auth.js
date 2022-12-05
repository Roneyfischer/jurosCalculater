import express from "express";
import app from "../0.config/server/app.js";
import priceCalculator from "../3.controller/entities/interest/CalculateInterest.js";
import userController from "../3.controller/entities/user/User.js";

const auth = express.Router();

auth.post("/", async (req, res) => {
  console.log("> [route.auth]");

  userController[req.body.type](req.body, res);
});

export default auth;
