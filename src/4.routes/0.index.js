import express from "express";
import interestCalculateRoute from "./1.interestCalculateRoute copy.js";
import auth from "./2.auth.js";
import loggedArea from "./3.loggedArea.js";

const router = (app) => {
  console.log("> [route.index] Inicial route");
  app
    .use("/interestCalculate", interestCalculateRoute)
    .use("/auth", auth)
    .use("/loggedArea", loggedArea);
};

export default router;
