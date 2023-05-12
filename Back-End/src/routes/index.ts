import { Router } from "express";
import { privateRouts } from "../middlewares/Auth";
import ProdutoController from "../controllers/ProdutoController";
import * as cartController from "../controllers/cartController";
import UsuarioController from "../controllers/usersController"
import * as ValidatorsUser from "../middlewares/ValidadorUsuario";
import * as ValidatorsCart from "../middlewares/ValidatorsCart"

const router = Router();

router.get('/produtos', ProdutoController.Consulte);
router.get('/produto/:id/', ProdutoController.ConsultePorID);
router.get('/carrinho/', privateRouts, cartController.FindAllCarts);
router.post('/carrinho/adicionar/', ValidatorsCart.CartAddValidator, privateRouts, cartController.addCart);
router.delete('/carrinho/excluir/:id', privateRouts, cartController.delet);
router.post('/cadastrar/', ValidatorsUser.ValidadorRegistro, UsuarioController.register);
router.post('/entrar/', ValidatorsUser.ValidadorLogin, UsuarioController.Logar);

export default router