import cron from 'node-cron';
import { deleteFreshTalents } from '../middlewares/global.middlewares.js';

const scheduleDelete = () => {
    // const frequency = '0 0 0,6,12,18 * * *';
    const frequency = '0 11 3 * * *';

    cron.schedule(frequency, async () => {
        console.log('Executando tarefa agendada para apagar talentos antigos.');
        await deleteFreshTalents();
    });
};

export default scheduleDelete;