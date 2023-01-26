import { Model, DataTypes } from "sequelize";
import sequelize from '.';

class User extends Model {
    id!: number;
    name!: string;
    userName!: string;
    email!: string;
    password!: string;
    token!: string;
};

User.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: { type: DataTypes.STRING },
    userName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    token: { type: DataTypes.STRING }
}, {
    sequelize: sequelize,
    tableName: "user",
    timestamps: false
})

export default User