import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import messageRoute from "./routes/message.route.js";
import {app, server} from "./socketIO/server.js";

import cors from "cors";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
  
try {
      mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongodb");
} catch (error) {
     console.log(error);
}

app.use("/api/user",userRoute);
app.use("/api/message",messageRoute);

server.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
});