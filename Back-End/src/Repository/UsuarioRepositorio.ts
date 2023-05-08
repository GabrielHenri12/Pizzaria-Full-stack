import { Usuario } from "../database/models/usuario";
import { UsuarioType } from "../Types/UsuarioTypes";
import { Conversao } from "../utilities/Conversao";
import { IRepositorio } from "./IRepositorio";
import bcrypt from "bcryptjs"

export class UsuarioRepositorio implements IRepositorio<UsuarioType>{

    public Adicionar = async (UsuarioDados: UsuarioType): Promise<void> => {

        try {
            await Usuario.create({
                NOME: UsuarioDados.NOME,
                SOBRENOME: UsuarioDados.SOBRENOME,
                CPF: UsuarioDados.CPF,
                IDADE: UsuarioDados.IDADE,
                EMAIL: UsuarioDados.EMAIL,
                SENHA: bcrypt.hashSync(UsuarioDados.SENHA, 10),
                CREDENCIAL: UsuarioDados.CREDENCIAL,
                TELEFONE: UsuarioDados.TELEFONE
            })
            return;
        } catch (Erro) {
            console.log(Erro)
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    };

    public Consulte = async (): Promise<UsuarioType[]> => {

        try {
            const UsuariosModel = await Usuario.findAll();
            return UsuariosModel.map(usuario => Conversao.ConverterUsuarioParaType(usuario));
        } catch (Erro) {
            console.log(Erro)
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    }

    public ConsulteParcial = async (valor: string): Promise<UsuarioType | null> => {

        try {
            const UsuarioModel = await Usuario.findOne({ where: { EMAIL: valor } });
            return UsuarioModel ? Conversao.ConverterUsuarioParaType(UsuarioModel) : null
        } catch (Erro) {
            console.log(Erro)
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    }

    public ConsultePorID = async (id: number): Promise<UsuarioType | null> => {
        
        try {
            const UsuarioModel = await Usuario.findByPk(id);
            return UsuarioModel ? Conversao.ConverterUsuarioParaType(UsuarioModel) : null
        } catch (Erro) {
            console.log(Erro)
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    }

    public Editar(dados: UsuarioType): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public Deletar(ID: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}