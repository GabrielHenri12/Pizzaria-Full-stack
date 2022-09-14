import { Request, Response } from "express";
import { Cart } from "../models/cart";

export const addCart = async (req:Request, res:Response)=>{
    let {tamanho, quantidade, id} = req.body;
    if(id){
        const newItem = Cart.build({
            id_pizza: id,
            size: tamanho,
            length: quantidade
        })
        await newItem.save()
    }
    
    res.redirect('/')
};