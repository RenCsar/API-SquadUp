import { Types } from "mongoose";
import Talents from "../models/talent.js";

// import cron from 'node-cron';
// import { deleteFreshTalents } from '../middlewares/global.middlewares.js';

// const scheduleDelete = () => {
//     // const frequency = '0 0 0,6,12,18 * * *';
//     const frequency = '0 23 3 * * *';

//     cron.schedule(frequency, async () => {
//         console.log('Executando tarefa agendada para apagar talentos antigos.');
//         await deleteFreshTalents();
//     });
// };

// export default scheduleDelete;

export const deleteFreshTalents = async () => {
    try {
        const cutoffDate = new Date('2024-04-01'); // Data limite para exclusão
        const currentDate = new Date(); // Data atual

        // Cria um Timestamp para a data limite
        const cutoffTimestamp = Math.floor(cutoffDate.getTime() / 1000);
        const currentTimestamp = Math.floor(currentDate.getTime() / 1000);

        // Deleta os talentos criados desde a data limite
        await Talents.deleteMany({
            _id: {
                $gte: Types.ObjectId.createFromTime(cutoffTimestamp),
                $lte: Types.ObjectId.createFromTime(currentTimestamp)
            }
        });

        console.log('Talentos recenter foram apagados.');
    } catch (error) {
        console.error('Erro ao apagar talentos recentes:', error);
    }
};