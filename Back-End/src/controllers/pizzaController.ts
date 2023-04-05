import { Request, Response, NextFunction } from "express";
import * as PizzasServices from "../Repository/PizzaRepository"

export const home = async (req:Request, res:Response, next: NextFunction)=>{
    const listaPizza = await PizzasServices.findAll();

    listaPizza ? res.json(listaPizza) : next(new Error("Null list"));
}

export const opcao = async (req:Request, res:Response, next: NextFunction)=>{
    const pizza = await PizzasServices.findByID(parseInt(req.params.id))
    
    pizza ? res.json(pizza) : next(new Error("Pizza não encontrada"))
}

