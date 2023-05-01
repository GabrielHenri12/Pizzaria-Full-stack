import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database";

export class Tamanho extends Model{
    ID!: number;
    NOME!: string;
    DESCRICAO!: string;
}

Tamanho.init({
    ID: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        field: "ID"
    },
    NOME: { type: DataTypes.STRING },
    DESCRICAO: { type: DataTypes.STRING },
}, {
    sequelize: sequelize,
    tableName: 'TAMANHOS',
    timestamps: false
})

export default Tamanho;