import { NextFunction, Request, Response } from 'express';
import * as UserServices from '../Services/UserServices';
import { generateToken } from "../configuration/passport"
import bcrypt from "bcrypt"

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const { name, lastName, password, email } = req.body;

    const testUser = await UserServices.findUser(email);
    if (testUser != null) {
        return next(new Error('Email already exists'));
    }

    if (name && lastName && password && email) {
        const passwordCrypt = bcrypt.hashSync(password, 10)

        const newUser = await UserServices.add(
            name,
            lastName,
            passwordCrypt,
            email
        )
        return res.json(newUser)
    } else {
        return next(Error('Any fiel is empty'))
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
        const User = await UserServices.findUser(email);
        if (User == null) return next(new Error("User not found"));

        const match = bcrypt.compareSync(password, User.password);
        if (!match) return next(new Error("invalid Password"));

        const token = generateToken(User.email);
        await User.update({ token });

        return res.json({ status: true, token });

    } catch (error: any) {
        next(new Error(error.message));
    }
}