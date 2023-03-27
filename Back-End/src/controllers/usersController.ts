import { Request, Response } from 'express';
import User from '../database/models/user';
import { generateToken } from "../configuration/passport"
import bcrypt from "bcrypt"

export const register = async (req: Request, res: Response) => {
    let testUser = await User.findOne({ where: { email: req.body.email } })
    if (testUser != null) {
        res.json({ Error: 'Email já existe', status: false })
        return;
    }
    if (req.body) {
        let password = bcrypt.hashSync(req.body.password, 10)

        let newUser = await User.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password
        })
        res.json(newUser)
    } else {
        res.json({ Error: 'Está faltando algúm campo', status: false })
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
    return res.json({ Error: "Ocorreu algum erro!" })
}