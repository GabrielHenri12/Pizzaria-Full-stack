import User from "../database/models/user";
import bcrypt from "bcrypt"
import { generateToken } from "../configuration/passport";

export const add = async (name: string, lastName: string, password: string, email: string): Promise<User> => {
    return await User.create(
        {
            name,
            lastName,
            password,
            email
        })
}

export const findUser = async (email: string): Promise<User | null> => {
    const user = await User.findOne({ where: { email } });

    return user != null ? user : null;
}

export const matchUser = async (email: string, password: string): Promise<User> => {
    const user = await findUser(email);
    if (user == null) {
        throw new Error("User not found")
    };
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
        throw new Error("Invalid Password")
    }
    return user;
}