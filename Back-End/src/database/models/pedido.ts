import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import { Produtos } from "./produto";
import { Usuario } from "./usuario";
import Preco from "./preco";

export class Pedido extends Model {
    public ID!: number;
    public ID_USUARIO!: number;
    public ID_PRODUTO!: number;
    public ID_PRECO!: number;
    public QUANTIDADE!: number;
    public PRECO!: number;

    public static associate() {
        this.belongsTo(Usuario, { foreignKey: 'ID_USUARIO' });

        this.belongsTo(Produtos, { foreignKey: 'ID_PRODUTO' });

        this.belongsTo(Preco, { foreignKey: 'ID_PRECO' });
    }
}

Pedido.init({
    ID: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        field: "ID"
    },
    ID_USUARIO: { type: DataTypes.INTEGER },
    ID_PRODUTO: { type: DataTypes.INTEGER },
    ID_PRECO: { type: DataTypes.INTEGER },
    QUANTIDADE: { type: DataTypes.INTEGER },
    PRECO: { type: DataTypes.INTEGER },
}, {
    sequelize: sequelize,
    tableName: "PEDIDOS",
    timestamps: false,
})
Pedido.associate();

export default Pedido;