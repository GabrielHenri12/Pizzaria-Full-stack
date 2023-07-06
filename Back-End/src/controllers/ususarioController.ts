import { NextFunction, Request, Response } from 'express';
import { UsuarioRepositorio } from "../Repository/UsuarioRepositorio";
import { UsuarioServicos } from '../Services/UsuarioServicos';
import { UsuarioType } from '../Types/UsuarioTypes';
import { Conversao } from '../utilities/Conversao';

class UsuarioController {

    public static async register(req: Request, res: Response, next: NextFunction) {
        const user: UsuarioType = req.body;
        const userRepository = new UsuarioRepositorio;
        const _userServices = new UsuarioServicos(userRepository)

        const Resposta = await _userServices.Registrar(Conversao.ConverterUsuariotypeParaEntidade(user))
        if (Resposta.isResultado()) {
            return res.json({ status: true, value: "Usuário registrado com sucesso" })
        }
        return next(Resposta.value)
    }

    public static async Logar(req: Request, res: Response, next: NextFunction) {
        const { EMAIL, SENHA } = req.body;
        const userRepository = new UsuarioRepositorio;
        const _userServices = new UsuarioServicos(userRepository);

        const Response = await _userServices.Logar(EMAIL, SENHA);
        if (Response.isResultado()) {
            return res.json({ status: true, value: Response.value });
        }
        next(Response.value);

    }
}

export default UsuarioController;