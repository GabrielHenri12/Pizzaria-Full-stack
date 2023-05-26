import { Request, Response, NextFunction } from "express"
import { ErrorCustom } from "../Error/ErrorType";

export const CartAddValidator = (req: Request, res: Response, next: NextFunction) => {

    const { ID_PRODUTO, ID_PRECO, QUANTIDADE, PRECO } = req.body;

    if (!ID_PRODUTO || !ID_PRECO || !QUANTIDADE || !PRECO) {
        return next(new ErrorCustom("Por favor, forneça todos os campos obrigatórios", false, 401));
    }

    if (isNaN(ID_PRODUTO) || isNaN(ID_PRECO) || isNaN(QUANTIDADE) || isNaN(PRECO)) {
        return next(new ErrorCustom("Por favor, forneça valores numéricos válidos para os campos", false, 401));
    }
    next()
}