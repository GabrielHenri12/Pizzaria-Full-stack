import Cart from "../database/models/cart";
import Pizzas from "../database/models/pizzas";

export const create = async (size: string, length: number, id_pizza: number, id_user: number): Promise<Cart> => {
    return await Cart.create(
        {
            size,
            length,
            id_pizza,
            id_user
        })
}

export const FindCarts = async (id: number): Promise<Cart[]> => {
    return await Cart.findAll({ where: { id }, include: Pizzas });
}

export const findByID = async(id: number): Promise<Cart | null> => {
    return await Cart.findByPk(id);
}

export const deletCart = async (id: number) => {
    await Cart.destroy({ where: { id } });
}