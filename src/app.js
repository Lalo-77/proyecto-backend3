import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import mocksRouter from "./routes/mocks.router.js";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect("mongodb+srv://crisn3682:coderhouse@cluster0.xqijc.mongodb.net/backend3?retryWrites=true&w=majority&appName=Cluster0");

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
//app.use('/api/adoptions',adoptionsRouter);
//app.use('/api/sessions',sessionsRouter);
app.use("/api/mock", mocksRouter);

app.listen(PORT,()=>console.log(`Escuchando en el puerto ${PORT}`))
