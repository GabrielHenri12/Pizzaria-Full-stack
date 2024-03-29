import { Request, Response, NextFunction } from "express";
import { ProdutosRepositorio } from "../Repository/ProdutosRepositorio"
import { ProdutoServicos } from "../Services/ProdutoServicos";

const _repositorio = new ProdutosRepositorio;
const _produtoServicos = new ProdutoServicos(_repositorio)

class ProdutoController {

    public static Consulte = async (req: Request, res: Response, next: NextFunction) => {
        const listaPizza = await _produtoServicos.Consulte();

        listaPizza ? res.json(listaPizza) : next(new Error("Null list"));
    }

    public static ConsultePorID = async (req: Request, res: Response, next: NextFunction) => {
        const produto = await _produtoServicos.ConsultePorID(parseInt(req.params.id));

        produto ? res.json(produto) : next(new Error("Pizza não encontrada"))
    }
}

export default ProdutoController;