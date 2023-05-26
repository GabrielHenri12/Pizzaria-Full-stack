import { ErrorCustom } from "../Error/ErrorType";
import { IPedidoRepositorio } from "../Repository/IPedidoRepositorio";
import { PedidoType } from "../Types/PedidoTypes";
import { Pedido } from "../database/models/pedido";
import { Callback, Erro, Resultado } from "../utilities/Callback";
import { Conversao } from "../utilities/Conversao";

export class PedidoServicos {
    private readonly _pedidoRepositorio;

    constructor(PedidoRepositorio: IPedidoRepositorio) {
        this._pedidoRepositorio = PedidoRepositorio
    }

    public async Adicionar(NovoPedido: Pedido): Promise<Callback<ErrorCustom, string>> {
        try {
            await this._pedidoRepositorio.Adicionar(NovoPedido);
            return Resultado('Produto adicionado com sucesso');
        } catch {
            return Erro(new ErrorCustom('Ocorreu algum erro no processo', false, 400));
        }
    }

    public async ConsultePorUsuario(ID_USUARIO: number): Promise<Callback<ErrorCustom, PedidoType[]>> {
        try {
            const response = await this._pedidoRepositorio.ConsultePorUsuario(ID_USUARIO);

            if(!response) return Erro(new ErrorCustom('Lista de produtos vazia', false, 404));

            return Resultado(response.map(item => Conversao.ConverterPedidoParaType(item)));
        } catch {
            return Erro(new ErrorCustom('Ocorreu algum erro no processo', false, 400));
        }
    }

    public async Deletar(ID: number): Promise<Callback<ErrorCustom, string>> {
        try {
            await this._pedidoRepositorio.Deletar(ID);
            return Resultado('Produto adicionado com sucesso');
        } catch {
            return Erro(new ErrorCustom('Ocorreu algum erro no processo', false, 400));
        }
    }
}