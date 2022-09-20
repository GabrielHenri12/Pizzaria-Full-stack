import {Model, DataTypes} from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UserInstances extends Model{
    id: number,
    name: string,
    userName: string,
    email: string,
    password: string
};

export const User = sequelize.define<UserInstances>("User", {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: { type: DataTypes.STRING },
    userName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING }
},{
    tableName: "user",
    timestamps: false
})