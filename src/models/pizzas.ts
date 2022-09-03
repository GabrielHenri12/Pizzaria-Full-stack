import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id: number;
    sabor: string;
    img: string;
    tamanho: string;
    valor: number;
}

export const Pizzas = sequelize.define<UserInstance>('Pizzas',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    sabor: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
    tamanho: {
        type: DataTypes.STRING,
        get(){
            const row = this.getDataValue('tamanho');
            return JSON.parse(row);
        }
    },
    valor: {
        type: DataTypes.INTEGER
    }},
    {
        tableName: 'pizzas',
        timestamps: false
})