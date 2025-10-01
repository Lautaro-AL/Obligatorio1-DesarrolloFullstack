import express from "express";

const app = express();
const port = process.env.PORT || 3000;

import v1 from "./v1/index.js";

app.use("/v1", v1);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
