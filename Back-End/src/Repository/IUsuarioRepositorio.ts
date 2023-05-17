import { UsuarioType } from "../Types/UsuarioTypes";
import { IRepositorio } from "./IRepositorio";

export interface IUsuarioRepositorio extends IRepositorio<UsuarioType>{
    updatToken(ID: number, TOKEN: string): Promise<void>;
}