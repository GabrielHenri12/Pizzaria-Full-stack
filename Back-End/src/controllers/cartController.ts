import { Request, Response } from "express";
import { Pizzas } from "../models/pizzas";
import { Cart } from "../models/cart";
import { User } from "../models/user";

export const addCart = async (req: Request, res: Response) => {
    let { tamanho, quantidade, id} = req.body;
    let pizza = await Pizzas.findByPk(id);
    let user = req.user

    if (user != undefined) {
        if (id && tamanho && quantidade) {
            const newItem = Cart.build({
                id_user: user,
                id_pizza: pizza?.id,
                size: tamanho,
                length: parseInt(quantidade),
            })
            await newItem.save()
            res.json({ newItem })

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
    let cart = await Cart.findAll({where:{id_user: req.user}});

    res.json({ cart });
}

export const delet = async (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    await Cart.destroy({ where: { id_pedido: id } });

    res.json({ sucess: true });
}