import { NextFunction, Request, Response } from 'express';
import { UsuarioRepositorio } from "../Repository/UsuarioRepositorio";
import { UsuarioServicos } from '../Services/UsuarioServicos';
import { UsuarioType } from '../Types/UsuarioTypes';

class UsuarioController {

    public static async register(req: Request, res: Response, next: NextFunction) {
        const user: UsuarioType = req.body;
        const userRepository = new UsuarioRepositorio;
        const _userServices = new UsuarioServicos(userRepository)

        try {
            await _userServices.Registrar(user)
            return res.json({ status: true, data: "Deu Certo" })
        } catch (err) {
            return next(err)
        }

    }

    public static async Logar(req: Request, res: Response, next: NextFunction) {
        const {EMAIL, SENHA} = req.body;
        const userRepository = new UsuarioRepositorio;
        const _userServices = new UsuarioServicos(userRepository);

        try {
            const UserToken = await _userServices.Logar(EMAIL, SENHA);
            return res.json({ status: true, data: UserToken });
        } catch (error) {
            next(error);
        }
    }
}

export default UsuarioController;