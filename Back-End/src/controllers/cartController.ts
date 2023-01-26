import { Request, Response } from "express";
import  Pizzas  from "../database/models/pizzas";
import Cart from "../database/models/cart";

export const addCart = async (req: Request, res: Response) => {
    let { tamanho, quantidade, id } = req.body;
    let user = req.user

    if (user != undefined) {
        if (id && tamanho && quantidade) {
            const newItem = Cart.build({
                id_user: user,
                id_pizza: id,
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
    let cart = await Cart.findAll({ where: { id_user: req.user } });
    let pizzas = await Pizzas.findAll();
    function whatPizza(id_pizza:number){
        return pizzas.find(item => item.id == id_pizza)
    }
    let mapCart = cart.map(item => {
        let pizza = whatPizza(item.id_pizza);
        return {
            id_pedido: item.id_pedido,
            tamanho: item.size,
            quantidade: item.length,
            sabor: pizza?.sabor,
            valor: pizza?.valor,
            img: pizza?.img,
        }
    })

    res.json({ mapCart });
}

export const delet = async (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    await Cart.destroy({ where: { id_pedido: id } });

    res.json({ sucess: true });
}