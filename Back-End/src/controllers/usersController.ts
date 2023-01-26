import { Request, Response } from 'express';
import User from '../database/models/user';
import { generateToken } from "../configuration/passport"
import bcrypt from "bcrypt"

export const cadastre = async (req: Request, res: Response) => {
    let testUser = await User.findOne({ where: { email: req.body.email } })
    if (testUser) {
        res.json({ err: 'Email já existe', status: false })
        return;
    }
    if (req.body) {
        let password = bcrypt.hashSync(req.body.password, 10)
        let newUser = await User.create({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            password
        })
        res.json({ user: newUser })
    } else {
        res.json({ err: 'Está faltando algúm campo' })
        console.log(req.body)
    }
}

export const login = async (req: Request, res: Response) => {
    let { email, password } = req.body;
    let UserLogin = await User.findOne({ where: { email } })


    if (UserLogin) {
        let match = bcrypt.compareSync(password, UserLogin.password);
        if (match) {
            let token = generateToken({ id: UserLogin.id });
            await UserLogin.update({ token });
            res.json({ status: true, token });
            return;
        }
    } else {
        res.json({ status: false, error: "Usuario não encontrtado" });
        res.status(401);
        return;
    }
}