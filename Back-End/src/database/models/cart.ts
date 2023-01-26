import { Model, DataTypes } from "sequelize";
import sequelize from ".";

class Cart extends Model {
    id_pedido!: number;
    id_user!: number;
    id_pizza!: number;
    length!: number;
    size!: string;
}

Cart.init({
    id_pedido: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_pizza: {
        type: DataTypes.INTEGER
    },
    length: {
        type: DataTypes.INTEGER
    },
    size: {
        type: DataTypes.STRING
    }
}, {
    sequelize: sequelize,
    tableName: "cart",
    timestamps: false
})

export default Cart;