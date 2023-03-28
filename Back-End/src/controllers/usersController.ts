import { Request, Response } from 'express';
import * as UserServices from '../Services/UserServices';
import { generateToken } from "../configuration/passport"
import bcrypt from "bcrypt"

export const register = async (req: Request, res: Response) => {
    const testUser = await UserServices.findUser(req.body.email)
    if (testUser != null) {
        return res.json({ Error: 'Email já existe', status: false });
    }
    if (req.body) {
        let password = bcrypt.hashSync(req.body.password, 10)

        let newUser = await UserServices.add(
            req.body.name,
            req.body.lastName,
            req.body.email,
            password
        )
        return res.json(newUser)
    } else {
        return res.json({ Error: 'Está faltando algúm campo', status: false })
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const UserLogin = await UserServices.matchUser(email, password);
        const token = generateToken(UserLogin.email);
        await UserLogin.update({ token });
        return res.json({ status: true, token });
    }catch(error){
        res.json({ Error: error })
    }
}