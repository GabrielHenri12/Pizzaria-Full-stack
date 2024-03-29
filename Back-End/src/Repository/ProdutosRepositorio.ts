import Produtos from "../database/models/produto";
import Preco from "../database/models/preco";
import Tamanho from "../database/models/tamanho";
import { IProdutoRepositorio } from "./IProdutoRepositorio";

export class ProdutosRepositorio implements IProdutoRepositorio{

    public async Adicionar(dados: Produtos): Promise<void> {
        await Produtos.create({ dados });
        return
    }

    public async Consulte(): Promise<Produtos[]> {
        return await Produtos.findAll({
            attributes: ['ID', 'NOME', 'DESCRICAO', 'TIPO', 'IMG'],
            include: [{
                model: Preco,
                attributes: ['ID', 'VALOR'],
                include: [{
                    model: Tamanho,
                    attributes: ['NOME']
                }]
            }]
        });
    }

    public async ConsultePorID(ID: number): Promise<Produtos | null> {
        return await Produtos.findByPk(ID,
            {
                attributes: ['ID', 'NOME', 'DESCRICAO', 'TIPO', 'IMG'],
                include: [{
                    model: Preco,
                    attributes: ['ID', 'VALOR'],
                    include: [{
                        model: Tamanho,
                        attributes: ['NOME']
                    }]
                }]
            });
    }

    public async ConsulteParcial(chave: string, valor: string): Promise<Produtos[] | null> {
        throw new Error("Method not implemented.");
    }


    public async Editar(dados: Produtos): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async Deletar(id: number): Promise<void> {
        await Produtos.destroy({ where: { id } });
        return;
    }

}