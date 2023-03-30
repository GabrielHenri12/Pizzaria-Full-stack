import { Request, Response } from "express";
import * as CartServices from "../Services/CartServices";
import * as UserServices from "../Services/UserServices";

export const addCart = async (req: Request, res: Response) => {
    const { size, length, id_pizza } = req.body;
    const user = await UserServices.findUserByID(req.user as number)

    if (user == null) {
        return res.json({ error: 'token of user invalid' });
    }
    if (!id_pizza || !length || !size) {
        return res.json({ error: 'something is missing' });
    }

    const newItem = await CartServices.create(size, length, id_pizza, user.id);
    
    return res.json(newItem)
};

export const homeCart = async (req: Request, res: Response) => {
    
    const user = await UserServices.findUserByID(req.user as number)
    
    if(user == null) return res.json({mensage: "User not find"})

    const carts = await CartServices.FindCarts(user.id);

    return carts == null ? res.json({ mensage: "Lista Vazia" }) : res.json(carts);
}

export const delet = async (req: Request, res: Response) => {
    const cart = await CartServices.findByID(parseInt(req.params.id));
    if (cart == null) {
        return res.json({sucess: false})
    }
    
    await CartServices.deletCart(cart.id);
    return res.json({ sucess: true });
}