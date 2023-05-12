import { ErrorRequestHandler, Request, Response } from "express";
import { ErrorCustom } from "./ErrorType";

export const errorHandler: ErrorRequestHandler = (err: ErrorCustom, req: Request, res: Response)=>{
    err.status ? 
        res.status(err.statusCode) : 
        res.status(400);
    
    err.message ?
        res.json({status: err.status ,Erro: err.message}) :
        res.json({status: 'Erro no sistema', Erro: 'Ocorreu algum erro.' });
}