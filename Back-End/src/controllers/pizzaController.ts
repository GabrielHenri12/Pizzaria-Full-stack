import { Request, Response } from "express";
import * as PizzasServices from "../Services/PizzaServices"

export const home = async (req:Request, res:Response)=>{
    const listaPizza = await PizzasServices.findAll();
    if(listaPizza == null){
        return res.json({Error: "Lista vazia"})
    }
    res.json(listaPizza)
}

export const opcao = async (req:Request, res:Response)=>{
    const pizza = await PizzasServices.findByID(parseInt(req.params.id))

    res.json(pizza)
}

