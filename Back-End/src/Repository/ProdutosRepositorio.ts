import Produtos from "../database/models/produto";
import { IProdutosFuncoes } from "./IProdutosFuncoes";
import Preco from "../database/models/preco";
import Tamanho from "../database/models/tamanho";

export class ProdutosRepositorio implements IProdutosFuncoes<Produtos>{

    public async Adicionar(dados: Produtos): Promise<Produtos> {
        return await Produtos.create({ dados });
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

    public async ConsulteParcial(): Promise<Produtos[]> {
        throw new Error("Method not implemented.");
    }


    public async Editar(dados: Produtos): Promise<Produtos> {
        throw new Error("Method not implemented.");
    }

    public async Deletar(id: number): Promise<void> {
        await Produtos.destroy({ where: { id } });
        return;
    }

}