import express from "express";
import conectDB from "./config/db.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import dotenv from "dotenv";
import cors from "cors";
import v1Routes from "./index.js";
dotenv.config();

conectDB();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Api Funcionando" });
});

app.use("/v1", v1Routes);

//middleware de manejo de errores
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
