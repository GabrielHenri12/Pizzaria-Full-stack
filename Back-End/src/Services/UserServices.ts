import User from "../database/models/user";

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

export const findUserByID = async (id: number): Promise<User | null> => {
    return await User.findByPk(id);
}