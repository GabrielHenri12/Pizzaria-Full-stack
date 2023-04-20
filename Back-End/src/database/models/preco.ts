import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database";

export class Preco extends Model {
    ID!: number;
    ID_TAMANHO!: number;
    ID_PRODUTO!: number;
    VALOR!: number;
}

Preco.init({
    ID: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        field: "ID"
    },
    ID_TAMANHO: { type: DataTypes.INTEGER },
    ID_PRODUTO: { type: DataTypes.INTEGER },
    VALOR: { type: DataTypes.INTEGER }
}, {
    sequelize: sequelize,
    tableName: 'PRECOS',
    timestamps: false
})

export default Preco;