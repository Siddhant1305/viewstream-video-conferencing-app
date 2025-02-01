import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controller/socketManager.js";

import cors from "cors";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: "true"}));


const start = async () => {
    const connectionDb = await mongoose.connect("mongodb+srv://siddhantpandey1305:viewstream@viewstream.fr06a.mongodb.net/?retryWrites=true&w=majority&appName=viewstream")
    
    console.log(`MONGO Connection DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("Connected on Port 8000")
    });
};


start();