import {Produtos} from "../database/models/produto"
import { IRepositorio } from "./IRepositorio";

export interface IProdutoRepositorio extends IRepositorio<Produtos> {

}