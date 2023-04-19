import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database";

export class Tamanho extends Model{
    id!: number;
    NOME!: string;
    DESCRICAO!: string;
}

Tamanho.init({
    NOME: { type: DataTypes.STRING },
    DESCRICAO: { type: DataTypes.STRING },
}, {
    sequelize: sequelize,
    tableName: 'TAMANHOS',
    timestamps: false
})

export default Tamanho;