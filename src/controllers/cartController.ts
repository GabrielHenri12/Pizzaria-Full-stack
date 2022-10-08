import { Request, Response } from "express";
import { Pizzas } from "../models/pizzas";
import { Cart } from "../models/cart";

export const addCart = async (req:Request, res:Response)=>{
    let {tamanho, quantidade, id} = req.body;
    let pizza = await Pizzas.findByPk(id);

    if(id){
        let valor = 0
        if(pizza?.valor){
            valor = (pizza.valor) * quantidade
        }
        const newItem = Cart.build({
            size: tamanho,
            length: quantidade,
            img: pizza?.img,
            money: valor,
            flavor: pizza?.sabor
        })
        await newItem.save()
    }
    
    res.redirect('/')
};

export const homeCart = async (req:Request, res:Response)=>{
    let cart = await Cart.findAll();
    
    res.json({pong: true});
    res.render('pages/cartPage', {
        cart
    })
}

export const increase = async (req:Request, res:Response)=>{
    let id: number = parseInt(req.params.id);
    let itemCart = await Cart.findAll( { where: {id_pedido:id} } );
    if(itemCart.length > 0){
        let item = itemCart[0];
        let money = item.money/item.length;

        if(item.length <10){
            item.length++;
            item.money = item.length*money;
        }
        await item.save();
    }

    res.redirect('/carrinho');
}

export const decrease = async (req:Request, res:Response)=>{
    let id: number = parseInt(req.params.id);
    let itemCart = await Cart.findAll( { where: {id_pedido:id} } );

    if(itemCart.length > 0){
        let item = itemCart[0];
        let money = item.money/item.length;

        if(item.length > 1){
            item.length--;
            item.money = item.length*money;
        }
        await item.save();
    }

    res.redirect('/carrinho');
}

export const delet = async (req:Request, res:Response)=>{
    let id: number = parseInt(req.params.id);
    await Cart.destroy( { where: {id_pedido:id} } );

    res.redirect('/carrinho');
}