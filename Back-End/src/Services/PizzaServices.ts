import Pizzas from "../database/models/pizzas";

export const findAll = async (): Promise<Pizzas[]> => {
    return await Pizzas.findAll({
        order: [
            ["id", "ASC"]
        ]
    });
}

export const findByID = async (id: number): Promise<Pizzas | null> => {
    return await Pizzas.findByPk(id);
}