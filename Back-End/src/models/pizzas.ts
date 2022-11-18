import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id: number;
    sabor: string;
    img: string;
    tamanho: string;
    valor: number;
    quantidade: number;
    descricao: string;
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
        type: DataTypes.FLOAT
    },
    descricao:{
        type: DataTypes.STRING
    },
    quantidade: {
        type: DataTypes.INTEGER
    }},
    {
        tableName: 'pizzas',
        timestamps: false
})