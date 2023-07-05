import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

export class Usuario extends Model {
    ID!: number;
    NOME!: string;
    SOBRENOME!: string;
    CPF!: string;
    CREDENCIAL!: string;
    TELEFONE!: string;
    IDADE!: number;
    EMAIL!: string;
    SENHA!: string;
    TOKEN!: string;
};

Usuario.init({
    ID: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        field: "ID"
    },
    NOME: {
        type: DataTypes.STRING, set(value: string) {
            this.setDataValue('NOME', value.toLowerCase());
        }
    },
    SOBRENOME: {
        type: DataTypes.STRING, set(value: string) {
            this.setDataValue('SOBRENOME', value.toLowerCase());
        }
    },
    CPF: { type: DataTypes.STRING }, 
    CREDENCIAL: {
        type: DataTypes.STRING, set(value: string) {
            this.setDataValue('CREDENCIAL', "usuario");
        }
    },
    TELEFONE: { type: DataTypes.STRING },
    IDADE: { type: DataTypes.INTEGER },
    EMAIL: {
        type: DataTypes.STRING, set(value: string) {
            this.setDataValue('EMAIL', value.toLowerCase());
        }
    },
    SENHA: { type: DataTypes.STRING },
    TOKEN: { type: DataTypes.STRING },
}, {
    sequelize: sequelize,
    tableName: "USUARIOS",
    timestamps: false
})

export default Usuario;