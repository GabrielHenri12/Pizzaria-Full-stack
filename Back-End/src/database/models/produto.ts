import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database";
import Tamanho from './tamanho';
import Preco from './preco';

export class Produtos extends Model {
    ID!: number;
    NOME!: string;
    DESCRICAO!: string;
    TIPO!: string;
    IMG!: string;
}

Produtos.init({
    ID: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        field: "ID"
    },
    NOME: { type: DataTypes.STRING },
    DESCRICAO: { type: DataTypes.STRING },
    TIPO: { type: DataTypes.STRING },
    IMG: { type: DataTypes.STRING }
}, {
    sequelize: sequelize,
    tableName: 'PRODUTOS',
    timestamps: false
})

Produtos.hasMany(Preco, { foreignKey: 'ID_PRODUTO' });
Preco.belongsTo(Produtos, { foreignKey: 'ID_PRODUTO' });
Tamanho.hasMany(Preco, { foreignKey: 'ID_TAMANHO' });
Preco.belongsTo(Tamanho, { foreignKey: 'ID_TAMANHO' });

export default Produtos;