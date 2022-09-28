import express from "express";

import { AppDataSource } from "./database/data-source";
import "./shared/container";
import { router } from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(router);

  app.listen(3990, () => console.log("Server up at port 3990"));
});
