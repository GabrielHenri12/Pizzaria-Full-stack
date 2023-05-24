import { PedidoType } from "../Types/PedidoTypes";
import { ProdutoType } from "../Types/ProdutoTypes";
import { UsuarioType } from "../Types/UsuarioTypes";
import { Usuario } from "../database/models/usuario";

export class Conversao {

    public static ConverterProdutoParaType = (produto: any): ProdutoType => {
        const produtoDTO: ProdutoType = {
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

    public static ConverterUsuarioParaType = (UsuarioDados: Usuario): UsuarioType => {
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

    public static ConverterPedidoParaType = (item: any): PedidoType => {
        const usuario = item.Usuario.dataValues;
        const Preco = item.Preco.dataValues;
        const Produto = item.Produto.dataValues;

        const PedidoType: PedidoType = {
            ID: item.ID,
            QUANTIDADE: item.QUANTIDADE,
            PRECOTOTAL: item.PRECO,
            Usuario: {
                ID: usuario.ID,
            },
            Preco: {
                ID: Preco.ID,
                VALOR: Preco.VALOR,
                TAMANHO: {
                    NOME: Preco.Tamanho.NOME,
                    DESCRICAO: Preco.Tamanho.DESCRICAO,
                },
            },
            Produto: {
                ID: Produto.ID,
                NOME: Produto.NOME,
                DESCRICAO: Produto.DESCRICAO,
                TIPO: Produto.TIPO,
                IMG: Produto.IMG,
            },
        };
        return PedidoType;
    }
}
