import Produtos from "../database/models/produto";
import { IProdutosFuncoes } from "./IProdutosFuncoes";
import DB from "../database/config/database"
import Preco from "../database/models/preco";
import Tamanho from "../database/models/tamanho";

export class ProdutosRepositorio implements IProdutosFuncoes<Produtos>{

    public async Adicionar(dados: Produtos): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async Consulte(): Promise<Produtos[]> {
        return await Produtos.findAll({
            attributes: ['id', 'NOME', 'DESCRICAO', 'TIPO', 'IMG'],
            include: [{
                model: Preco,
                attributes: ['id', 'VALOR'],
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
                attributes: ['id', 'NOME', 'DESCRICAO', 'TIPO', 'IMG'],
                include: [{
                    model: Preco,
                    attributes: ['id', 'VALOR'],
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

    public async Deletar(ID: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export const findAll = async (): Promise<Produtos[]> => {
    return await Produtos.findAll({
        order: [
            ["id", "ASC"]
        ]
    });
}

export const findByID = async (id: number): Promise<Produtos | null> => {
    return await Produtos.findByPk(id);
}

export const TesteFindAll = async () => {
    const Todos = await DB.query('SELECT * FROM PUBLIC."PRODUTOS"')

    return Todos
}