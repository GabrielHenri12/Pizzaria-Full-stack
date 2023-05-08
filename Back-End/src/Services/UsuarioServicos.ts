import {UsuarioRepositorio} from "../Repository/UsuarioRepositorio";
import { UsuarioType } from "../Types/UsuarioTypes";
import { GerarToken } from "../Helpers/GeradorDeToken";
import { IRepositorio } from "../Repository/IRepositorio";
import bcrypt from "bcryptjs"

export class UsuarioServicos {
   
    private readonly _userRepository: UsuarioRepositorio;
    
    constructor(userRepository: IRepositorio<UsuarioType>){
        this._userRepository = userRepository
    }

    public async Registrar(UsuarioDados: UsuarioType): Promise<boolean>{
        const existeCadastro = await this._userRepository.ConsulteParcial(UsuarioDados.EMAIL);
        if (existeCadastro) {
            throw new Error('Email já cadastrado');
        }
    
        try {
            await this._userRepository.Adicionar(UsuarioDados);
            return true
        } catch(Erro) {
            console.log(Erro)
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    }

    public async Logar(userData: UsuarioType): Promise<string>{
        const user = await this._userRepository.ConsulteParcial(userData.EMAIL)
    
        if(!user) throw new Error("Email não registrado")
        if(!bcrypt.compareSync(userData.SENHA, user.SENHA)) throw new Error("Senha incorreta");
        
        return GerarToken(user.EMAIL);
    }
}