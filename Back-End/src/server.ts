import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mainroutes from "./routes/index"
import { errorHandler } from "./Error/ErrorHandler";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use(mainroutes);
server.use(errorHandler)

const port = process.env.PORT || 8080
server.listen(port, ()=>{
    console.log("Server rodando na porta:", port)
});