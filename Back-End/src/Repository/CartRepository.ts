import Cart from "../database/models/carrinho";
import Pizzas from "../database/models/produto";
import { CartType } from "../Types/CartTypes";

export class CartRepository {

    create = async (CartData: CartType): Promise<Cart> => {
        return await Cart.create(
            {
                size: CartData.size,
                length: CartData.length,
                id_pizza: CartData.id_pizza,
                id_user: CartData.id_user
            })
    }

    FindAll = async (id: number): Promise<Cart[]> => {
        return await Cart.findAll({
            where: { id_user: id },
            include: {
                model: Pizzas,
                as: 'Pizzas',
                attributes: ['img', 'flavor', 'price', 'description']
            },
            attributes: ['id', 'length', 'size', 'id_user']
        });
    }

    findByID = async (id: number): Promise<Cart | null> => {
        return await Cart.findByPk(id);
    }

    deletCart = async (id: number) => {
        await Cart.destroy({ where: { id } });
    }
}