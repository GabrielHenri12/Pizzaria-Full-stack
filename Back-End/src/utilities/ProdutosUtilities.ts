import { ProdutoType } from "../Types/ProdutoTypes";
import Produtos from "../database/models/produto";

export const ProdutoConvertido = (produto: any)=>{
    const produtoDTO: ProdutoType  = {
        id: produto.id,
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