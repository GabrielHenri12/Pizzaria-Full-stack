import Carrinho, { Pedido } from "../database/models/pedido";
import { IRepositorio } from "./IRepositorio";

export interface IPedidoRepositorio extends IRepositorio<Carrinho> {
    ConsultePorUsuario(ID_USUARIO: number): Promise<Pedido[] | null>
}