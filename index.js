//Imports
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./src/database/db.js";

//Routes imports
import talentRoute from "./src/routes/talent.route.js";

//variables
const app = express();
const PORT = process.env.PORT || 4000;

//config
dotenv.config();
connectDatabase(); 
app.use(json());
app.use(cors());

//routes
app.get("/", (_, res) => { res.send("Bem-vindo(a) ao APP!") });
app.use("/talent", talentRoute);

//Server listening
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));