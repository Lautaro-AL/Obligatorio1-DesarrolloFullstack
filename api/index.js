import express from "express";
import conectDB from "./v1/config/db.js";
import { notFoundMiddleware } from "./v1/middlewares/notFound.middleware.js";
import { errorMiddleware } from "./v1/middlewares/error.middleware.js";
import dotenv from "dotenv";
import cors from "cors";
import v1Routes from "./v1/index.js";
dotenv.config();

conectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", v1Routes);

//middleware de manejo de errores
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
