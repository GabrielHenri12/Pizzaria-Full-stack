import { ProdutoType } from "../Types/ProdutoTypes";

export const ProdutoConvertido = (produto: any): ProdutoType =>{
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