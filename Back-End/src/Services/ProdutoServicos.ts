import { ProdutosRepositorio } from "../Repository/ProdutosRepositorio";
import { ProdutoConvertido } from "../utilities/ProdutosUtilities";
import { IProdutosFuncoes } from "../Repository/IProdutosFuncoes";
import { ProdutoType } from "../Types/ProdutoTypes";

export class ProdutoServicos implements IProdutosFuncoes<ProdutoType>{
    private readonly _produtosRepositorio;
    
    constructor(repositorio: ProdutosRepositorio){
        this._produtosRepositorio = repositorio
    };
    
    public async Consulte(): Promise<ProdutoType[]> {
        const produtos = await this._produtosRepositorio.Consulte();
        const produtosDTO: ProdutoType[]  = produtos.map((produto: any) => (ProdutoConvertido(produto)));

        return produtosDTO;
    }
    
    public async ConsultePorID(ID: number): Promise<ProdutoType> {
        const produto: any = await this._produtosRepositorio.ConsultePorID(ID);
        if(produto == null) throw new Error("Produto não encontrado");
        const produtoDTO: ProdutoType  = ProdutoConvertido(produto);

        return produtoDTO;
    }

    ConsulteParcial(): Promise<ProdutoType[]> {
        throw new Error("Method not implemented.");
    }


    Adicionar(dados: ProdutoType): Promise<ProdutoType> {
        throw new Error("Method not implemented.");
    }

    Editar(dados: ProdutoType): Promise<ProdutoType> {
        throw new Error("Method not implemented.");
    }

    public async Deletar(ID: number): Promise<void> {
        await this._produtosRepositorio.Deletar(ID);
    }
    
}