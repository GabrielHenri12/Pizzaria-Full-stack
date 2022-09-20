import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface cartInstances extends Model {
    id_pedido: number;
    id_pizza: number;
    length: number;
    size: string;
    img: string;
    money: number;
    flavor: string;
}

export const Cart = sequelize.define<cartInstances>("Cart", {
    id_pedido: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    length: {
        type: DataTypes.INTEGER
    },
    size:{
        type: DataTypes.STRING
    },
    img:{
        type: DataTypes.STRING
    },
    money:{
        type: DataTypes.FLOAT
    },
    flavor:{
        type: DataTypes.STRING
    }
},{
    tableName: "cart",
    timestamps: false
})