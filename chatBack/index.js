import express from 'express';
import cors from 'cors';
import Connect from './db/connection.js';
import AuthRouter from './routes/auth.js'

const app = express();
app.use(express());
app.use(cors());
app.use(express.json());

app.use('/chat/user', AuthRouter)

async function start() {
    Connect();
    const PORT = process.env.PORT || 5000;
    
    await app.listen(PORT, () => console.log(`SERVER IS WORKING ON PORT ${PORT}`));

}

start()