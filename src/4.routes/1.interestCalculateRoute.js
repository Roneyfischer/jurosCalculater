import express from "express";
import app from "../0.config/server/app.js";
import priceCalculator from "../3.controller/entities/interest/CalculateInterest.js";

const interestCalculateRoute = express.Router();

interestCalculateRoute.get("/", async (req, res) => {
  console.log("> [route.interestCalculateRoute]");

  return res.status(200).json(await priceCalculator(req.body));
});

export default interestCalculateRoute;
