import { Request, Response, NextFunction } from "express";
import * as CartServices from "../Services/CartServices";
import * as UserServices from "../Services/UserServices";

export const addCart = async (req: Request, res: Response, next: NextFunction) => {
    const { size, length, id_pizza } = req.body;
    const user = await UserServices.findUserByID(req.user as number)

    if (user == null) {
        return next(new Error('token of user invalid'))
    }
    if (!id_pizza || !length || !size) {
        return next(Error('something is missing'));
    }

    const newItem = await CartServices.create(size, length, id_pizza, user.id);
    return res.json(newItem)
};

export const homeCart = async (req: Request, res: Response, next: NextFunction) => {

    const user = await UserServices.findUserByID(req.user as number)
    if (user == null) return next(new Error("User not find"))

    const carts = await CartServices.FindCarts(user.id);
    return carts == null ? next(new Error("Null list")) : res.json(carts);
}

export const delet = async (req: Request, res: Response, next: NextFunction) => {
    const cart = await CartServices.findByID(parseInt(req.params.id));
    if (cart == null) {
        return next(new Error("Cart is null"))
    }

    await CartServices.deletCart(cart.id);
    return res.json({ sucess: true });
}