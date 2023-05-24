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
    NOME: {
        type: DataTypes.STRING,
        set(value: string) {
            this.setDataValue('NOME', value.toLowerCase());
        }
    },
    DESCRICAO: {
        type: DataTypes.STRING,
        set(value: string) {
            this.setDataValue('DESCRICAO', value.toLowerCase());
        }
    },
    TIPO: {
        type: DataTypes.STRING,
        set(value: string) {
            this.setDataValue('TIPO', value.toLowerCase());
        }
    },
    IMG: {
        type: DataTypes.STRING,
        set(value: string) {
            this.setDataValue('IMG', value.toLowerCase());
        }
    }
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