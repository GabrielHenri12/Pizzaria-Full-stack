import { IUsuarioRepositorio } from "./IUsuarioRepositorio";
import { UsuarioType } from "../Types/UsuarioTypes";
import { Conversao } from "../utilities/Conversao";
import { Usuario } from "../database/models/usuario";
import bcrypt from "bcryptjs"
import { ErrorCustom } from "../Error/ErrorType";

export class UsuarioRepositorio implements IUsuarioRepositorio {

    public async Adicionar(UsuarioDados: UsuarioType): Promise<void> {

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

    public async Consulte(): Promise<Usuario[]> {

        try {
            return await Usuario.findAll();
        } catch (Erro) {
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    }

    public async ConsulteParcial(chave: string, valor: string): Promise<Usuario[] | null> {

        try {
            return await Usuario.findAll({ where: { [chave]: valor } });
        } catch (Erro) {
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    }

    public async ConsultePorID(id: number): Promise<Usuario | null> {

        try {
            return await Usuario.findByPk(id);
        } catch (Erro) {
            throw new Error("Algo deu errado na ação, confira os logs")
        }
    }

    public async Editar(UsuarioDados: UsuarioType): Promise<void> {
        const user = await Usuario.findByPk(UsuarioDados.ID);
        if (!user) return;
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

    public async updatToken(ID: number, TOKEN: string): Promise<void> {
        const user = await Usuario.findByPk(ID);
        if (!user) return;
        user.TOKEN = TOKEN;
        await user.save();
    }

    public async Deletar(ID: number): Promise<void> {
        await Usuario.destroy({ where: { ID } });
    }

}