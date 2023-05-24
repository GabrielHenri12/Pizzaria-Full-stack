import { Callback, Resultado, Erro } from "../utilities/Callback";
import { ErrorCustom } from "../Error/ErrorType";
import { Conversao } from "../utilities/Conversao";
import { IProdutoRepositorio } from "../Repository/IProdutoRepositorio";
import { ProdutoType } from "../Types/ProdutoTypes";

export class ProdutoServicos{
    private readonly _produtosRepositorio;

    constructor(repositorio: IProdutoRepositorio) {
        this._produtosRepositorio = repositorio
    };

    public async Consulte(): Promise<Callback<ErrorCustom, ProdutoType[]>> {
        const produtos = await this._produtosRepositorio.Consulte();
        if(!produtos) return Erro(new ErrorCustom("Lista vazia", false, 404))
        const produtosDTO: ProdutoType[] = produtos.map(produto => (Conversao.ConverterProdutoParaType(produto)));
        
        return Resultado(produtosDTO);
    }

    public async ConsultePorID(ID: number): Promise<Callback<ErrorCustom, ProdutoType>> {
        const produto = await this._produtosRepositorio.ConsultePorID(ID);
        if(!produto) return Erro(new ErrorCustom("Produto não encontrado", false, 404))
        const produtoDTO: ProdutoType = Conversao.ConverterProdutoParaType(produto);

        return Resultado(produtoDTO);
    }

    public async Deletar(ID: number): Promise<void> {
        await this._produtosRepositorio.Deletar(ID);
    }

}