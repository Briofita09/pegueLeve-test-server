import "reflect-metadata";
import express from "express";
import "./database/connect";

const app = express();

import routes from "./routes";

app.use(express.json);
app.use(routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
