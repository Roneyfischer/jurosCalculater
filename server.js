import express from "express";
import app from "./src/0.config/server/app.js";
import chalk from "chalk";

console.log(`teste`);
app.listen(process.env.SERVER_PORT, () => {
  console.log("> [server] Starting server");
  console.log(
    chalk.blueBright.bold(
      `> [server] Server is running on http://127.0.0.1:${process.env.SERVER_PORT}`
    )
  );
});
