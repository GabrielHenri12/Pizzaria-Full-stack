import { userType } from "../Types/UserTypes";
import User from "../database/models/user";

// export const addUser = async (NewUser: userType): Promise<User> => {
//     return await User.create(
//         {
//             name: NewUser.name,
//             lastName: NewUser.lastName,
//             password: NewUser.password,
//             email: NewUser.email
//         })
// }

// export const findUserByEmail = async (email: string): Promise<User | null> => {
//     return await User.findOne({ where: { email } });
// }

// export const findUserByID = async (id: number): Promise<User | null> => {
//     return await User.findByPk(id);
// }

export class UserRepository {
    public addUser = async (NewUser: userType): Promise<User> => {
        return await User.create(
            {
                name: NewUser.name,
                lastName: NewUser.lastName,
                password: NewUser.password,
                email: NewUser.email
            })
    };

    public findUserByEmail = async (email: string): Promise<User | null> => {
        return await User.findOne({ where: { email } });
    }

    public findUserByID = async (id: number): Promise<User | null> => {
        return await User.findByPk(id);
    }
}