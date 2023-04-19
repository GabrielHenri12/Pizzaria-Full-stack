import validator from "validator";
import {Request, Response, NextFunction} from "express"
import { CartType } from "../Types/CartTypes";

export const CartAddValidator = (req: Request, res: Response, next: NextFunction)=>{
    
    const cart: CartType = req.body;

    if(!cart.length) next(new Error("A quantidade da pizza é obrigatorio"));
    if(!cart.size) next(new Error("O tamanho da pizza é obrigatorio"));
    if(!cart.id_pizza) next(new Error("O id da pizza é obrigatorio"));
    next()
}