import { ProdutosRepositorio } from "../Repository/ProdutosRepositorio";
import { Conversao } from "../utilities/Conversao";
import { IRepositorio } from "../Repository/IRepositorio";
import { ProdutoType } from "../Types/ProdutoTypes";

export class ProdutoServicos implements IRepositorio<ProdutoType>{
    private readonly _produtosRepositorio;

    constructor(repositorio: ProdutosRepositorio) {
        this._produtosRepositorio = repositorio
    };

    public async Consulte(): Promise<ProdutoType[]> {
        const produtos = await this._produtosRepositorio.Consulte();
        const produtosDTO: ProdutoType[] = produtos?.map(produto => (Conversao.ConverterProdutoParaType(produto)));

        return produtosDTO;
    }

    public async ConsultePorID(ID: number): Promise<ProdutoType> {
        const produto = await this._produtosRepositorio.ConsultePorID(ID);
        if (produto == null) throw new Error("Produto não encontrado");
        const produtoDTO: ProdutoType = Conversao.ConverterProdutoParaType(produto);

        return produtoDTO;
    }

    ConsulteParcial(valor: string): Promise<ProdutoType | null> {
        throw new Error("Method not implemented.");
    }


    Adicionar(dados: ProdutoType): Promise<void> {
        throw new Error("Method not implemented.");
    }

    Editar(dados: ProdutoType): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async Deletar(ID: number): Promise<void> {
        await this._produtosRepositorio.Deletar(ID);
    }

}