import { Request, Response } from "express";
import  Pizzas  from "../database/models/pizzas";

export const home = async (req:Request, res:Response)=>{
    let listaPizza = await Pizzas.findAll();

    res.json({listaPizza})
}

export const opcao = async (req:Request, res:Response)=>{
    let item = await Pizzas.findByPk(parseInt(req.params.id))

    res.json({item})
}

