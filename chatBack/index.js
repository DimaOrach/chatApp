import express from 'express';
import cors from 'cors';
import Connect from './db/connection.js';
import AuthRouter from './routes/auth.js';
import UserRouter from './routes/user.js';
import {app, server} from './socket/socket.js';
import MessageRouter from './routes/message.js';


app.use(cors());
app.use(express.json());

app.use('/chat/user', AuthRouter);
app.use('/chat/users', UserRouter);
app.use('/chat/message', MessageRouter);
app.use(express.static('public')); //показує аватарки

async function start() {
    Connect();
    const PORT = process.env.PORT || 5000;
    
    await server.listen(PORT, () => console.log(`SERVER IS WORKING ON PORT ${PORT}`));

}

start()