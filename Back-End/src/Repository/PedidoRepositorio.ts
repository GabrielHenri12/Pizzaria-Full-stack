import Cart from "../database/models/pedido";
import Preco from "../database/models/preco";
import Produtos from "../database/models/produto";
import Tamanho from "../database/models/tamanho";
import Usuario from "../database/models/usuario";
import { ErrorCustom } from "../Error/ErrorType";
import { IPedidoRepositorio } from "./IPedidoRepositorio";

export class PedidoRepositorio implements IPedidoRepositorio {


    public async Adicionar(dados: Cart): Promise<void> {
        await Cart.create({
            ID_USUARIO: dados.ID_USUARIO,
            ID_PRODUTO: dados.ID_PRODUTO,
            ID_PRECO: dados.ID_PRECO,
            QUANTIDADE: dados.QUANTIDADE,
            PRECO: dados.PRECO
        });
    }

    public async ConsultePorUsuario(ID_USUARIO: number): Promise<Cart[] | null> {
        const response = await Cart.findAll({
            where: { ID_USUARIO },
            attributes: ['ID', 'QUANTIDADE', 'PRECO'],
            include: [
                { model: Usuario, attributes: ['ID'] },
                {
                    model: Preco, attributes: ['ID', 'VALOR'],
                    include: [{ model: Tamanho, attributes: ['NOME', 'DESCRICAO'] }]
                },
                {
                    model: Produtos, attributes: ['ID', 'NOME', 'DESCRICAO', 'TIPO', 'IMG']
                }],
        });
        if (!response) return null;
        return response;
    }

    public async Consulte(): Promise<Cart[]> {
        return await Cart.findAll();
    }

    ConsulteParcial(valor: string): Promise<Cart | null> {
        throw new Error("Method not implemented.");
    }

    public async ConsultePorID(ID: number): Promise<Cart | null> {
        const response = await Cart.findByPk(ID, {
            attributes: ['QUANTIDADE', 'PRECO'],
            include: [
                { model: Usuario, attributes: ['ID'] },
                {
                    model: Preco, attributes: ['ID', 'VALOR'],
                    include: [{ model: Tamanho, attributes: ['NOME', 'DESCRICAO'] }]
                },
                {
                    model: Produtos, attributes: ['ID', 'NOME', 'DESCRICAO', 'TIPO', 'IMG']
                }],
        });
        if (!response) return null;
        return response;
    }

    public async Editar(dados: Cart): Promise<void> {
        const Produto = await this.ConsultePorID(dados.ID);
        if (!Produto) throw new ErrorCustom("Produto não encontrado", false, 404);
        return;
    }

    public async Deletar(ID: number): Promise<void> {
        await Cart.destroy({ where: { ID } });
    }
}