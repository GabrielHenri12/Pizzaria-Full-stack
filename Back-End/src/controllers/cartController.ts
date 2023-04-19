import { Request, Response, NextFunction } from "express";
import { CartType } from "../Types/CartTypes";
import { CartRepository } from "../Repository/CartRepository";
import * as CartServices from "../Services/CartServecies";

export const addCart = async (req: Request, res: Response, next: NextFunction) => {
    const CartData: CartType = req.body;
    CartData.id_user = req.user as number;
    const _cartRepository = new CartRepository;

    try {
        await CartServices.addToCart(CartData, _cartRepository);
        res.json({ status: true, mensagem: "Pizza adicionada com sucesso" })
    } catch (err) {
        next(err)
    }
};

export const FindAllCarts = async (req: Request, res: Response, next: NextFunction) => {
    const _cartRepository = new CartRepository;
    const id_user: number = req.user as number;

    try {
        const carts = await CartServices.FindAll(id_user, _cartRepository);
        res.status(200).json(carts)
    } catch (err) {
        next(err)
    }

}

export const delet = async (req: Request, res: Response, next: NextFunction) => {
    const _cartRepository = new CartRepository;
    const id_cart: number = req.body;

    try {
        await CartServices.DeletCart(id_cart, _cartRepository);
        res.json({ sucess: true, mensagem: "Pizza excluida com sucesso" });
    } catch (err) {
        next(err)
    }
}