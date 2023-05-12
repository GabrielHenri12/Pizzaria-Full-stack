import validator from "validator";
import {Request, Response, NextFunction} from "express"
import { UsuarioType } from "../Types/UsuarioTypes";

export const ValidadorRegistro = (req: Request, res: Response, next: NextFunction)=>{
    
    const Usuario: UsuarioType = req.body;

    if(!validator.isLength(Usuario.NOME, {min: 3, max: 100})){
        next(new Error("Tamanho de nome invalido!"))
    }
    if(!validator.isLength(Usuario.SOBRENOME, {min: 3, max: 100})){
        next(new Error("Tamanho de nome invalido!"))
    }
    if(!validator.isLength(Usuario.CPF, {min: 6, max: 20})){
        next(new Error("Tamanho de senha invalido!"))
    }
    if(!validator.isEmail(Usuario.EMAIL)){
        next(new Error("Email invalido!"))
    }
    if(!validator.isLength(Usuario.SENHA, {min: 6, max: 20})){
        next(new Error("Tamanho de senha invalido!"))
    }
    if(Usuario.SENHA == null){
        next(new Error("Senha não pode ser nula!"))
    }
    if(!validator.isLength(Usuario.CREDENCIAL, {min: 1, max: 10})){
        next(new Error("Email invalido!"))
    }
    if(!validator.isMobilePhone(Usuario.TELEFONE)){
        next(new Error("Email invalido!"))
    }
    if(!Usuario.IDADE){
        next(new Error("Email invalido!"))
    }

    next()
}

export const ValidadorLogin = (req: Request, res: Response, next: NextFunction)=>{
        
    const Usuario: UsuarioType = req.body;
 
    if(!validator.isEmail(Usuario.EMAIL)){
        next(new Error("Email invalido!"))
    }
    if(!validator.isLength(Usuario.SENHA, {min: 1})){
        next(new Error("Senha não pode ser nula!"))
    }
    next()
}