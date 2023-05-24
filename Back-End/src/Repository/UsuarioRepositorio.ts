import { IUsuarioRepositorio } from "./IUsuarioRepositorio";
import { UsuarioType } from "../Types/UsuarioTypes";
import { Conversao } from "../utilities/Conversao";
import { Usuario } from "../database/models/usuario";
import bcrypt from "bcryptjs"
import { ErrorCustom } from "../Error/ErrorType";

export class UsuarioRepositorio implements IUsuarioRepositorio{

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
            throw new ErrorCustom("Algo deu errado na ação, confira os logs", false, 400)
        }
    };

    public Consulte = async (): Promise<UsuarioType[]> => {

        try {
            const UsuariosModel = await Usuario.findAll();
            return UsuariosModel.map(usuario => Conversao.ConverterUsuarioParaType(usuario));
        } catch (Erro) {
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    }

    public ConsulteParcial = async (valor: string): Promise<UsuarioType | null> => {

        try {
            const UsuarioModel = await Usuario.findOne({ where: { EMAIL: valor } });
            return UsuarioModel ? Conversao.ConverterUsuarioParaType(UsuarioModel) : null
        } catch (Erro) {
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    }

    public ConsultePorID = async (id: number): Promise<UsuarioType | null> => {

        try {
            const UsuarioModel = await Usuario.findByPk(id);
            return UsuarioModel ? Conversao.ConverterUsuarioParaType(UsuarioModel) : null
        } catch (Erro) {
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    }

    async Editar(UsuarioDados: UsuarioType): Promise<void> {
        const user = await Usuario.findByPk(UsuarioDados.ID);
        if(!user) return;
        user.NOME = UsuarioDados.NOME;
        user.SOBRENOME = UsuarioDados.SOBRENOME;
        user.CPF = UsuarioDados.CPF;
        user.IDADE = UsuarioDados.IDADE;
        user.EMAIL = UsuarioDados.EMAIL;
        user.SENHA = bcrypt.hashSync(UsuarioDados.SENHA, 10);
        user.CREDENCIAL = UsuarioDados.CREDENCIAL;
        user.TELEFONE = UsuarioDados.TELEFONE;
        user.TOKEN = UsuarioDados.TOKEN;
        await user.save();
    }

    async updatToken(ID: number, TOKEN: string): Promise<void> {
        const user = await Usuario.findByPk(ID);
        if(!user) return;
        user.TOKEN = TOKEN;
        await user.save();
    }

    public Deletar(ID: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}