import express from 'express';

const app = express();

async function start() {

    const PORT = process.env.PORT || 5000;
    
    await app.listen(PORT, () => console.log(`SERVER IS WORKING ON PORT ${PORT}`));

}

start()