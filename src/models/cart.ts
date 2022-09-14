import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface cartInstances extends Model {
    id_pedido: number,
    id_pizza: number,
    length: number,
    size: string
}

export const Cart = sequelize.define<cartInstances>("Cart", {
    id_pedido: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_pizza: {
        type: DataTypes.INTEGER
    },
    length: {
        type: DataTypes.INTEGER
    },
    size:{
        type: DataTypes.STRING
    }
},{
    tableName: "cart",
    timestamps: false
})