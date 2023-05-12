import { Request, Response } from "express"

export const PageNotFound = (req:Request, res:Response)=>{
    res.status(404)
    res.json({error: "Pagina não encontrada"})
}