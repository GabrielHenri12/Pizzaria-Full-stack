import { Request, Response } from "express";
import Pizzas from "../database/models/pizzas";
import Cart from "../database/models/cart";

export const addCart = async (req: Request, res: Response) => {
    const { size, length, id_pizza } = req.body;
    const id_user = req.user

    if (id_user != undefined) {
        if (id_pizza && length && size) {
            const newItem = await Cart.create(
                {
                    id_user,
                    id_pizza,
                    length,
                    size
                });

            await newItem.save()
            
            res.json(newItem)
        } else {
            res.json({ error: 'something is missing' })
            return;
        }
    } else {
        res.json({ error: 'token of user invalid' })
        return;
    }
};

export const homeCart = async (req: Request, res: Response) => {
    const cart = await Cart.findAll({ where: { id_user: req.user }, include: Pizzas });

    if (cart == null) {
        res.json({ mensage: "Lista Vazia" })
    }
    res.json(cart);
}

export const delet = async (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    await Cart.destroy({ where: { id } });

    res.json({ sucess: true });
}