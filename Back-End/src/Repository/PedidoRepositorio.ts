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
        return await Cart.findAll({
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
    }

    public async ConsulteParcial(chave: string, valor: string): Promise<Cart[] | null> {
        const response = await Cart.findAll({
            where: { [chave]: valor },
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

    public async ConsultePorID(ID: number): Promise<Cart | null> {
        const response = await Cart.findByPk(ID, {
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

    public async Editar(dados: Cart): Promise<void> {
        const Pedido = await this.ConsultePorID(dados.ID);
        if (!Pedido) throw new ErrorCustom("Pedido não encontrado", false, 404);
        Pedido.ID_PRECO = dados.ID_PRECO;
        Pedido.QUANTIDADE = dados.QUANTIDADE;
        Pedido.PRECO = dados.PRECO;
        await Pedido.save();
        return;
    }

    public async Deletar(ID: number): Promise<void> {
        await Cart.destroy({ where: { ID } });
    }
}