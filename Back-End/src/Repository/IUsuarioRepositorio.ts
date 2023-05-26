import Usuario from "../database/models/usuario";
import { IRepositorio } from "./IRepositorio";

export interface IUsuarioRepositorio extends IRepositorio<Usuario>{
    updatToken(ID: number, TOKEN: string): Promise<void>;
}