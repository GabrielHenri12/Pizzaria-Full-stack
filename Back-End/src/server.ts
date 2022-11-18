import express, {Request, Response, ErrorRequestHandler} from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import cors from "cors";
import { MulterError } from "multer";
import mainroutes from "./routes/index"

dotenv.config()

const server = express()

server.use(cors())

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use(mainroutes);

server.use((req:Request, res:Response)=>{
    res.status(404)
    res.json({error: "Pagina não encontrada"})
})

const errorHandler: ErrorRequestHandler = (err, req, res, next)=>{
    if(err.status){
        res.status(err.status)
    }else{
        res.status(400)
    }
    if(err.mensage){
        res.json({Erro: err.mensage})
    }else{
        res.json({ error: 'Ocorreu algum erro.' });
    }

    if(err instanceof MulterError){
        res.json({error: err.code})
    }
}

server.listen(process.env.PORT);