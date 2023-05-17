import bcrypt from "bcryptjs"
import { UsuarioType } from "../Types/UsuarioTypes";
import { GerarToken } from "../Helpers/GeradorDeToken";
import { ErrorCustom } from "../Error/ErrorType";
import { Callback, Erro, Resultado } from "../utilities/Callback";
import { IUsuarioRepositorio } from "../Repository/IUsuarioRepositorio";

export class UsuarioServicos {
    private readonly _userRepository: IUsuarioRepositorio;

    constructor(userRepository: IUsuarioRepositorio) {
        this._userRepository = userRepository
    }

    public async Registrar(UsuarioDados: UsuarioType): Promise<Callback<ErrorCustom, boolean>> {
        if (!await this._userRepository.ConsulteParcial(UsuarioDados.EMAIL)) {
            await this._userRepository.Adicionar(UsuarioDados);
            return Resultado(true);
        }
        return Erro(new ErrorCustom("Email já cadastrado", false, 400));
    }

    public async Logar(EMAIL: string, SENHA: string): Promise<Callback<ErrorCustom, string>> {
        const user = await this._userRepository.ConsulteParcial(EMAIL)

        if(!user){
           return Erro(new ErrorCustom("Email não registrado", false, 404))
        }
        if(!bcrypt.compareSync(SENHA, user.SENHA)) {   
           return Erro(new ErrorCustom("Senha incorreta", false, 401))
        }
        const token = GerarToken(user.EMAIL);
        await this._userRepository.updatToken(user.ID, token)
        return Resultado(token);
    }
}