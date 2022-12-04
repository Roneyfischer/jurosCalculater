import express from "express";
import interestCalculateRoute from "./1.interestCalculateRoute.js";


const router = (app) => {
  console.log("> [route.index] Inicial route");
  app
    .use("/interestCalculate", interestCalculateRoute)

};

export default router;
