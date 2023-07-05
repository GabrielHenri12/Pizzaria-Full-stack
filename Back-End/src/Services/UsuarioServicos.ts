import bcrypt from "bcryptjs"
import { GerarToken } from "../Helpers/GeradorDeToken";
import { ErrorCustom } from "../Error/ErrorType";
import { Callback, Erro, Resultado } from "../utilities/Callback";
import { IUsuarioRepositorio } from "../Repository/IUsuarioRepositorio";
import Usuario from "../database/models/usuario";

export class UsuarioServicos {
    private readonly _userRepository: IUsuarioRepositorio;

    constructor(userRepository: IUsuarioRepositorio) {
        this._userRepository = userRepository
    }

    public async Registrar(UsuarioDados: Usuario): Promise<Callback<ErrorCustom, boolean>> {
        try {
            await this._userRepository.Adicionar(UsuarioDados);
            return Resultado(true);
        } catch(err: any) {
            return Erro(new ErrorCustom("Ocorreu um erro ao se Registrar", false, 500));
        }
    }

    public async Logar(EMAIL: string, SENHA: string): Promise<Callback<ErrorCustom, string>> {
        try {
            const user = await this._userRepository.ConsulteParcial("EMAIL", EMAIL);

            if (!user) {
                return Erro(new ErrorCustom("Email não registrado", false, 404));
            }

            const isPasswordValid = bcrypt.compareSync(SENHA, user[0].SENHA);
            if (!isPasswordValid) {
                return Erro(new ErrorCustom("Senha incorreta", false, 401));
            }

            const token = GerarToken(user[0].EMAIL);
            await this._userRepository.updatToken(user[0].ID, token);

            return Resultado(token);
        } catch (error) {
            return Erro(new ErrorCustom("Ocorreu um erro ao fazer login", false, 500));
        }
    }
}