import validator from "validator";
import { Request, Response, NextFunction } from "express"
import { UsuarioType } from "../Types/UsuarioTypes";
import { ErrorCustom } from "../Error/ErrorType";
import { UsuarioRepositorio } from "../Repository/UsuarioRepositorio";

export const ValidadorRegistro = async (req: Request, res: Response, next: NextFunction) => {

    const NovoUsuario: UsuarioType = req.body;
    const EhCadastrado = await new UsuarioRepositorio().ConsulteParcial("EMAIL", NovoUsuario.EMAIL)

    if (EhCadastrado) {
        if (EhCadastrado.length > 0) {
            next(new ErrorCustom("Email: Email já cadastrado!", false, 409))
        }
    }
    if (!validator.isLength(NovoUsuario.NOME, { min: 3, max: 100 })) {
        next(new ErrorCustom("Nome: Campo obrigatorio!", false, 401))
    }
    if (!validator.isLength(NovoUsuario.SOBRENOME, { min: 3, max: 100 })) {
        next(new ErrorCustom("Sobrenome: Campo obrigatorio!", false, 401))
    }
    if (!validator.isLength(NovoUsuario.CPF, { min: 11, max: 11 })) {
        next(new ErrorCustom("CPF: CPF invalido!", false, 401))
    }
    if (!validator.isLength(NovoUsuario.EMAIL, { min: 1 })) {
        next(new ErrorCustom("Email: Campo obrigatorio!", false, 401))
    }
    if (!validator.isEmail(NovoUsuario.EMAIL)) {
        next(new ErrorCustom("Email: Endereço de Email invalido!", false, 401))
    }
    if (!validator.isLength(NovoUsuario.SENHA, { min: 1 })) {
        next(new ErrorCustom("Senha: Campo obrigatorio!", false, 401))
    }
    if (!validator.isLength(NovoUsuario.SENHA, { min: 6, max: 20 })) {
        next(new ErrorCustom("Senha: Tamanho de senha invalido!", false, 401))
    }
    if (!NovoUsuario.IDADE) {
        next(new ErrorCustom("Idade: Campo obrigatorio!", false, 401))
    }

    next()
}

export const ValidadorLogin = (req: Request, res: Response, next: NextFunction) => {

    const Usuario: UsuarioType = req.body;

    if (!validator.isEmail(Usuario.EMAIL)) {
        return next(new ErrorCustom("Email: Email invalido!", false, 401))
    }
    if (!validator.isLength(Usuario.SENHA, { min: 1 })) {
        return next(new ErrorCustom("Senha: Campo obrigatorio!", false, 401))
    }
    next()
}