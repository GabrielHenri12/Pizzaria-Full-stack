import { Request, Response, NextFunction } from "express";
import { PedidoRepositorio } from "../Repository/PedidoRepositorio";
import { PedidoServicos } from "../Services/PedidoServicos";
import Pedido from "../database/models/pedido";

class PedidoController {
    
    public static async Adicionar(req: Request, res: Response, next: NextFunction) {

        const _pedidoRepositorio = new PedidoRepositorio;
        const _pedidoServicos = new PedidoServicos(_pedidoRepositorio);

        const { ID_PRODUTO, ID_PRECO, QUANTIDADE, PRECO } = req.body;

        const NovoPedido = new Pedido({
            ID_USUARIO: req.user,
            ID_PRODUTO,
            ID_PRECO,
            QUANTIDADE,
            PRECO
        })

        const response = await _pedidoServicos.Adicionar(NovoPedido);
        if (response.isResultado()) {
            return res.json({ status: true, value: response.value })
        }
        return next(response.value)
    };

    public static async ConsultePorUsuario(req: Request, res: Response, next: NextFunction) {

        const _pedidoRepositorio = new PedidoRepositorio;
        const _pedidoServicos = new PedidoServicos(_pedidoRepositorio)

        const id_user: number = req.user as number;

        const response = await _pedidoServicos.ConsultePorUsuario(id_user);

        if (response.isResultado()) {
            console.log(response.value)
            return res.json({ status: true, value: response.value })
        }
        return next(response.value)

    }

    public static async Deletar(req: Request, res: Response, next: NextFunction) {

        const _pedidoRepositorio = new PedidoRepositorio;
        const _pedidoServicos = new PedidoServicos(_pedidoRepositorio)

        const ID: number = req.body;

        const response = await _pedidoServicos.Deletar(ID);
        if (response.isResultado()) {
            console.log(response.value)
            return res.json({ status: true, value: response.value })
        }
        return next(response.value)
    }
}

export default PedidoController;