import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Pizzas from "./produto";
import User from "./usuario";

export class Cart extends Model {
    id!: number;
    length!: number;
    size!: string;
    id_pizza!: number;
    id_user!: number;
}

Cart.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    length: { type: DataTypes.INTEGER },
    size: { type: DataTypes.STRING },
    id_pizza: {
        type: DataTypes.INTEGER,
        references: { model: Pizzas, key: 'id' }
    },
}, {
    sequelize: sequelize,
    tableName: "cart",
    timestamps: false,
})

Cart.belongsTo(User, {
    constraints: true,
    foreignKey: "id_user"
});

Cart.hasMany(Pizzas, {foreignKey: "id", as: "Pizzas"})

export default Cart;