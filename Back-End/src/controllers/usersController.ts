import { NextFunction, Request, Response } from 'express';
import {UserRepository} from "../Repository/UserRepository";
import  {UserServices} from '../Services/UserServices';
import { userType } from '../Types/UserTypes';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const user: userType = req.body;
    const userRepository = new UserRepository;
    const _userServices = new UserServices(userRepository)

    try{
        await _userServices.addUser(user)
        return res.json({status: true, data: "Deu Certo"})
    }catch(err){
        return next(err)
    }
    
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const user: userType = req.body;
    const userRepository = new UserRepository;
    const _userServices = new UserServices(userRepository);

    try {
        const UserToken = await _userServices.loginUser(user);
        return res.json({ status: true, data: UserToken });
    } catch (error) {
        next(error);
    }
}