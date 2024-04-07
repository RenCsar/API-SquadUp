const cron = (_, res) => {
    console.log(`Hello! It's my first cron jobs.`);
    res.status(200).send("Hello! It's my first cron jobs.");
    return new Response(`Hello! It's my first cron jobs.`);
};

export default cron;