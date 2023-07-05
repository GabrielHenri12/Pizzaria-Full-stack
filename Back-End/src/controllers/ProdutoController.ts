import { Request, Response, NextFunction } from "express";
import { ProdutosRepositorio } from "../Repository/ProdutosRepositorio"
import { ProdutoServicos } from "../Services/ProdutoServicos";
import { ErrorCustom } from "../Error/ErrorType";

const _repositorio = new ProdutosRepositorio;
const _produtoServicos = new ProdutoServicos(_repositorio)

class ProdutoController {

    public static Consulte = async (req: Request, res: Response, next: NextFunction) => {
        const listaPizza = await _produtoServicos.Consulte();

        listaPizza ? res.json({ value: listaPizza.value, status: true}) : next(new ErrorCustom("Nenhum produto encontrado", false, 404));
    }

    public static ConsultePorID = async (req: Request, res: Response, next: NextFunction) => {
        const produto = await _produtoServicos.ConsultePorID(parseInt(req.params.id));

        produto ? res.json(produto) : next(new Error("Pizza não encontrada"))
    }
}

export default ProdutoController;