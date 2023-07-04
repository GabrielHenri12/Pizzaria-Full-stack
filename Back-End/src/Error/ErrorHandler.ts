import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ErrorCustom } from "./ErrorType";

export const errorHandler: ErrorRequestHandler = (err: ErrorCustom, req: Request, res: Response, next: NextFunction) =>
    err.message ?
        res.status(err.statusCode).json({ status: false, value: err.message }) :
        res.status(err.statusCode).json({ status: false, value: 'Ocorreu algum erro no servidor!.' });
