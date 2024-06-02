import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();

const server= http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: ["http://localhost:3000"],
        methods:["GET","POST"],
    },
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId: socketId} 

io.on("connection",(socket) => {

    console.log("bağlı kullanıcı" ,socket.id);
    
   const userId = socket.handshake.query.userId;
   if (userId != "undefined") userSocketMap[userId] = socket.id;

   io.emit("getOnlineUsers", Object.keys(userSocketMap));    //Kullanıcı online ise getOnlineUsers olarak set ediliyor.
    
    socket.on("disconnect", () =>{
        console.log("kullanıcı bağlantısı kesildi",socket.id);
        delete userSocketMap[userId];

        io.emit("getOnlineUsers", Object.keys(userSocketMap)); 
    });
});

export {app,io,server};