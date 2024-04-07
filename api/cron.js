import { deleteFreshTalents } from "../src/middlewares/global.middlewares";

const cron = async (_, res) => {
    try {
        await deleteFreshTalents();
        res.status(200).send({ message: "Talentos recenter foram apagados." });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

    // console.log(`Executando tarefa agendada para apagar talentos antigos.`);
    // return new Response(`Hello! It's my first cron jobs.`);
};

export default cron;