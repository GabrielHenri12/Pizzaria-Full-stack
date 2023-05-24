import { ErrorRequestHandler, Request, Response } from "express";
import { ErrorCustom } from "./ErrorType";

export const errorHandler: ErrorRequestHandler = (err: ErrorCustom, req: Request, res: Response) => {
    err.status ?
        res.status(err.statusCode) :
        res.status(400);

    err.message ?
        res.json({ status: false, data: err.message }) :
        res.json({ status: false, data: 'Ocorreu algum erro.' });
}