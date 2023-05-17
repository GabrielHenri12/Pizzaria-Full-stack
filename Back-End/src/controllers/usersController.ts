import { NextFunction, Request, Response } from 'express';
import { UsuarioRepositorio } from "../Repository/UsuarioRepositorio";
import { UsuarioServicos } from '../Services/UsuarioServicos';
import { UsuarioType } from '../Types/UsuarioTypes';

class UsuarioController {

    public static async register(req: Request, res: Response, next: NextFunction) {
        const user: UsuarioType = req.body;
        const userRepository = new UsuarioRepositorio;
        const _userServices = new UsuarioServicos(userRepository)

        const Resposta = await _userServices.Registrar(user)
        if(Resposta.isResultado()){
            return res.json({ status: true, data: "Usuário registrado com sucesso" })
        }
        return next(Resposta.valor)
    }

    public static async Logar(req: Request, res: Response, next: NextFunction) {
        const {EMAIL, SENHA} = req.body;
        const userRepository = new UsuarioRepositorio;
        const _userServices = new UsuarioServicos(userRepository);

            const Response = await _userServices.Logar(EMAIL, SENHA);
            if(Response.isResultado()){
                return res.json({ status: true, data: Response.valor });
            }
            next(Response.valor);
        
    }
}

export default UsuarioController;