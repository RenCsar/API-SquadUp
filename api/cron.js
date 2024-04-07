import { deleteFreshTalents } from "../src/middlewares/global.middlewares.js";

const cron = async (_, res) => {
    try {
        await deleteFreshTalents();
        console.log("Os Talentos recentes foram apagados.");
        res.status(200).send({ message: "Os Talentos recentes foram apagados." });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default cron;