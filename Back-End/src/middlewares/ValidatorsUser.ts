import validator from "validator";
import {Request, Response, NextFunction} from "express"
import { userType } from "../Types/UserTypes";

export const RegisterValidator = (req: Request, res: Response, next: NextFunction)=>{
    
    const user: userType = req.body;

    if(!validator.isLength(user.name, {min: 3, max: 100})){
        next(new Error("Tamanho de nome invalido!"))
    }
    if(!validator.isLength(user.lastName, {min: 3, max: 100})){
        next(new Error("Tamanho de nome invalido!"))
    }
    if(!validator.isLength(user.password, {min: 6, max: 20})){
        next(new Error("Tamanho de senha invalido!"))
    }
    if(user.password == null){
        next(new Error("Senha não pode ser nula!"))
    }
    if(!validator.isEmail(user.email)){
        next(new Error("Email invalido!"))
    }
    next()
}

export const LoginValidator = (req: Request, res: Response, next: NextFunction)=>{
        
    const user: userType = req.body;
 
    if(!validator.isEmail(user.email)){
        next(new Error("Email invalido!"))
    }
    if(!validator.isLength(user.password, {min: 6, max: 20})){
        next(new Error("Tamanho de senha invalido!"))
    }
    if(user.password == null){
        next(new Error("Senha não pode ser nula!"))
    }
    next()
}