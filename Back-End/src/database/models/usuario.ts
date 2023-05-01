import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

export class User extends Model {
    ID!: number;
    name!: string;
    lastName!: string;
    email!: string;
    password!: string;
    token!: string;
};

User.init({
    ID: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        field: "ID"
    },
    name: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    token: { type: DataTypes.STRING }
}, {
    sequelize: sequelize,
    tableName: "USUARIOS",
    timestamps: false
})

export default User