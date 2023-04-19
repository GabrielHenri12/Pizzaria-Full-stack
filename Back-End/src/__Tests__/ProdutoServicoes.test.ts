import { ProdutosRepositorio } from "../Repository/ProdutosRepositorio";
import { ProdutoServicos } from "../Services/ProdutoServicos";
import { ProdutoType } from "../Types/ProdutoTypes";

describe('Serviços de produtos',()=>{
    const _produtosRepositorio = new ProdutosRepositorio;
    const _produtoServicos = new ProdutoServicos(_produtosRepositorio);

    it('Deve consultar todos os produtos', async()=>{
        const Produtos: ProdutoType[] = await _produtoServicos.Consulte();

        expect(Produtos.length).toBeGreaterThan(1);
        expect(Produtos[0].precos.length).toBeGreaterThanOrEqual(1);
    });

    it('Deve consultar apenas 1 produto', async()=>{
        const Produto: ProdutoType = await _produtoServicos.ConsultePorID(1);

        expect(Produto).not.toBeNull();
        expect(Produto.precos.length).toBeGreaterThanOrEqual(1);
    })
})