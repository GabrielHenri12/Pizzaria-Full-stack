import { Request, Response, NextFunction } from "express";
import { ProdutosRepositorio } from "../Repository/ProdutosRepositorio"
import { ProdutoServicos } from "../Services/ProdutoServicos";

const _repositorio = new ProdutosRepositorio;
const _produtoServicos = new ProdutoServicos(_repositorio)

export const Consulte = async (req: Request, res: Response, next: NextFunction) => {
    const listaPizza = await _produtoServicos.Consulte();

    listaPizza ? res.json(listaPizza) : next(new Error("Null list"));
}

export const ConsultePorID = async (req: Request, res: Response, next: NextFunction) => {
    const tes = await _produtoServicos.ConsultePorID(parseInt(req.params.id));

    tes ? res.json(tes) : next(new Error("Pizza não encontrada"))
}

