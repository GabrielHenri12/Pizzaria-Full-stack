import { Request, Response, NextFunction } from "express";
import { PedidoType } from "../Types/PedidoTypes";
import { PedidoRepositorio } from "../Repository/PedidoRepositorio";
import { PedidoServicos } from "../Services/PedidoServicos";
import Pedido from "../database/models/pedido";

export const Adicionar = async (req: Request, res: Response, next: NextFunction) => {
    const { ID_PRODUTO, ID_PRECO, QUANTIDADE, PRECO } = req.body;
    
    const _pedidoRepositorio = new PedidoRepositorio;
    const _pedidoServicos = new PedidoServicos(_pedidoRepositorio)

    const NovoPedido = new Pedido({
        ID_USUARIO: req.user,
        ID_PRODUTO,
        ID_PRECO,
        QUANTIDADE,
        PRECO
    })

    const response = await _pedidoServicos.Adicionar(NovoPedido);
    if(response.isResultado()){
        return res.json({ status: true, data: response.valor })
    }
    return next(response.valor)
};

export const ConsultePorUsuario = async (req: Request, res: Response, next: NextFunction) => {
    const id_user: number = req.user as number; 

    const _pedidoRepositorio = new PedidoRepositorio;
    const _pedidoServicos = new PedidoServicos(_pedidoRepositorio)

    const response = await _pedidoServicos.ConsultePorUsuario(id_user);
    if(response.isResultado()){
        console.log(response.valor)
        return res.json({ status: true, data: response.valor })
    }
    return next(response.valor)

}

export const delet = async (req: Request, res: Response, next: NextFunction) => {
    const _cartRepository = new PedidoRepositorio;
    const id_cart: number = req.body;

    try {
        //await CartServices.DeletCart(id_cart, _cartRepository);
        //res.json({ sucess: true, mensagem: "Pizza excluida com sucesso" });
    } catch (err) {
        next(err)
    }
}