import { Request, Response } from 'express';
import { User } from '../models/user';
import { generateToken } from "../configuration/passport"

export const cadastre = async (req: Request, res: Response) => {
    let testUser = await User.findOne({where: {email: req.body.email}}) 
    if(testUser){
        res.json({err: 'Email já existe', status: false})
        return;
    }
    if (req.body) {
        let newUser = await User.create({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ user: newUser })
    }else{
        res.json({err: 'Está faltando algúm campo'})
        console.log(req.body)
    }
}

export const login = async (req: Request, res: Response) => {
    let { email, password } = req.body;
    let userLog = await User.findOne({ where: { email, password } })


    if (userLog) {
        let token = generateToken({ id: userLog.id });
        res.json({ status: true, token });
        return;
    } else {
        res.json({status: false, error: "Usuario não encontrtado" });
        res.status(401);
        return;
    }
}