import { Request, Response } from "express";
import { Pizzas } from "../models/pizzas";

export const home = async (req:Request, res:Response)=>{
    let listaPizza = await Pizzas.findAll();

    res.render("pages/homePage", {
        listaPizza
    })
}

export const opcao = async (req:Request, res:Response)=>{
    let item = await Pizzas.findByPk(parseInt(req.params.id))
    let listaPizza = await Pizzas.findAll();

    res.render("pages/homePage", {
        listaPizza,
        item
    })
}

