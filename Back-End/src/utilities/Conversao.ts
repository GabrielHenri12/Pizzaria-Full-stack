import { ProdutoType } from "../Types/ProdutoTypes";
import { UsuarioType } from "../Types/UsuarioTypes";
import { Usuario } from "../database/models/usuario";

export class Conversao {

    public static ConverterProdutoParaType = (produto: any): ProdutoType =>{
        const produtoDTO: ProdutoType  = {
            id: produto.ID,
            nome: produto.NOME,
            tipo: produto.TIPO,
            descricao: produto.DESCRICAO,
            img: produto.IMG,
            precos: produto.Precos.map((preco: any) => ({
                id: preco.id,
                valor: parseFloat(preco.VALOR),
                tamanho: preco.Tamanho.NOME
            }))
        }
    
        return produtoDTO;
    }
    
    public static ConverterUsuarioParaType = (UsuarioDados: Usuario):  UsuarioType=>{
        const UsuarioType: UsuarioType = {
            ID: UsuarioDados.ID,
            NOME: UsuarioDados.NOME,
            SOBRENOME: UsuarioDados.SOBRENOME,
            CPF: UsuarioDados.CPF,
            IDADE: UsuarioDados.IDADE,
            EMAIL: UsuarioDados.EMAIL,
            SENHA: UsuarioDados.SENHA,
            CREDENCIAL: UsuarioDados.CREDENCIAL,
            TOKEN: UsuarioDados.TOKEN,
            TELEFONE: UsuarioDados.TELEFONE
        }
        return UsuarioType;
    }
}
