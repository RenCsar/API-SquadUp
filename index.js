//Imports
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./src/database/db.js";
import { rateLimit } from 'express-rate-limit';

//Routes imports
import talentRoute from "./src/routes/talent.route.js";

//variables
const app = express();
const PORT = process.env.PORT || 4000;
const second = process.env.RATE_LIMIT_SEC;
const limit = process.env.RATE_LIMIT_LIMIT;

//config
dotenv.config();
connectDatabase();
app.use(json());
app.use(cors());

//Rate Limit
const limiter = rateLimit({
    windowMs: second * 1000,
    limit: limit,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    handler: (_, res) => {
        res.status(429).json({
            message: "Foram feitas muitas requisições, por favor tente novamente mais tarde!",
        });
    },
});

// Apply the rate limiting middleware to all requests.
app.use(limiter)

//routes
app.get("/", (_, res) => { res.send("Bem-vindo(a) ao APP!") });
app.use("/talent", talentRoute);

//Server listening
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));