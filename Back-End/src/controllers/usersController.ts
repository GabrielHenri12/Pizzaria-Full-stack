import { NextFunction, Request, Response } from 'express';
import {UserRepository} from "../Repository/UserRepository";
import * as UserServices from '../Services/UserServices';
import { userType } from '../Types/UserTypes';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const user: userType = req.body;

    try{
        const userRepository = new UserRepository;
        await UserServices.addUser(user, userRepository)
        return res.json({status: true, data: "Deu Certo"})
    }catch(err){
        return next(err)
    }
    
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const user: userType = req.body;

    try {
        const userRepository = new UserRepository;
        const UserToken = await UserServices.loginUser(user, userRepository);
        return res.json({ status: true, data: UserToken });
    } catch (error) {
        next(error);
    }
}