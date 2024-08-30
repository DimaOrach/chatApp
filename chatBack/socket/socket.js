import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const onlineUsers = {};

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

export const getReceiverSocketId = (recieverId) => {
    return onlineUsers[recieverId];
}

io.on('connection', (socket) => {
    console.log('User joined', socket.id);

    socket.on('join', (recieverId) => {
        onlineUsers[recieverId] = socket.id;
        console.log('Reciever: ', recieverId, 'socket id: ', socket.id);
    });

});

export {app, server, io}