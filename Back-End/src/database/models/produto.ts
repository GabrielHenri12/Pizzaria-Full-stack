import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database";

class Pizzas extends Model {
    id!: number;
    flavor!: string;
    img!: string;
    price!: number;
    description!: string;
}

Pizzas.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    flavor: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    description: { type: DataTypes.STRING }
}, {
    sequelize: sequelize,
    tableName: 'pizzas',
    timestamps: false
})

export default Pizzas;