import { Request, Response} from 'express';
import { User } from '../models/user';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import {generateToken} from "../configuration/passport"

export const cadastre = async (req:Request, res:Response)=>{
    let {name, userName, email, password} = req.body;

    let newUser = await User.create({
        name,
        userName,
        email,
        password
    })
    res.json({usuario: newUser})
}

export const login = async (req:Request, res:Response)=>{
    let {userName, password} = req.body;
    let userLog = await User.findOne({where: { userName, password} })


    if(userLog){
        let token = generateToken({id: userLog.id});
        res.json({status: true, token});
        return;
    }else{
        res.status(401);
        res.json({error: "Usuario não encontrtado"});
        return;
    }
}