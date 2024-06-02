
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { connect } from "mongoose";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";



const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());   //gelen istekleri json yükleriyle ayrıştırırız. (req.body den gelen istekleri)
app.use(cookieParser());

app.use("/api/auth", authRoutes);  //auth.routes.jsye gider ve dosya yollarına göre kayıt giriş vb işlemler yapılır.
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


/*
app.get("/", (req, res)=> {
  // root route http://localhost:5000/
  res.send("Hello World!!!");
});
*/

server.listen(PORT,() => {
    connectToMongoDB();
    console.log('Server Running on port ${PORT}');
});
 