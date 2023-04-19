import { DataTypes, Model, Sequelize } from 'sequelize';

class UserMock extends Model {
    id!: number;
    name!: string;
    lastName!: string;
    email!: string;
    password!: string;
    token!: string;
}

export const initUserMock = (sequelize: Sequelize): typeof UserMock => {
  UserMock.init(
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
        token: { type: DataTypes.STRING }
    },
    { sequelize, modelName: 'User' }
  );

  return UserMock;
};