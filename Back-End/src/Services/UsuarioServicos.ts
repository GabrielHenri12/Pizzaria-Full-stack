import { UsuarioRepositorio } from "../Repository/UsuarioRepositorio";
import { UsuarioType } from "../Types/UsuarioTypes";
import { GerarToken } from "../Helpers/GeradorDeToken";
import { IRepositorio } from "../Repository/IRepositorio";
import bcrypt from "bcryptjs"

export class UsuarioServicos {

    private readonly _userRepository: IRepositorio<UsuarioType>;

    constructor(userRepository: IRepositorio<UsuarioType>) {
        this._userRepository = userRepository
    }

    public async Registrar(UsuarioDados: UsuarioType): Promise<{success: boolean, error?: string}> {
        if (!await this._userRepository.ConsulteParcial(UsuarioDados.EMAIL)) {
            await this._userRepository.Adicionar(UsuarioDados);
            return {success: true};
        }

        return {success: false, error: 'Email já cadastrado'};
    }

    public async Logar(EMAIL: string, SENHA: string): Promise<string> {
        const user = await this._userRepository.ConsulteParcial(EMAIL)

        if (!user) throw new Error("Email não registrado")
        if (!bcrypt.compareSync(SENHA, user.SENHA)) throw new Error("Senha incorreta");

        return GerarToken(user.EMAIL);
    }
}