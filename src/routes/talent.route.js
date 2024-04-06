import { Router } from "express";
import { create, deleteById, findAll, findByEmail, findByStack, update } from "../controllers/talent.controller.js";
import { checkTalentCreationDate, limitUserCreation, talentExist, validEmail, validId, validUser } from "../middlewares/global.middlewares.js";

const talentRoute = Router();

talentRoute.post("/", validEmail, talentExist, limitUserCreation, create);
talentRoute.get("/", findAll);
talentRoute.get("/:email", findByEmail);
talentRoute.get("/search/:stack", findByStack);
talentRoute.delete("/:id",  validId, validUser, checkTalentCreationDate, deleteById);
talentRoute.patch("/:id",  validId, validUser, validEmail, talentExist, checkTalentCreationDate, update);

export default talentRoute;