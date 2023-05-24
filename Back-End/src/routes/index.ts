import { Router } from "express";
import { privateRouts } from "../middlewares/Auth";
import ProdutoController from "../controllers/ProdutoController";
import * as PedidoController from "../controllers/PedidoController";
import UsuarioController from "../controllers/usersController"
import * as ValidatorsUser from "../middlewares/ValidadorUsuario";
import * as ValidatorsCart from "../middlewares/ValidadorPedido"

const router = Router();

router.get('/produtos', ProdutoController.Consulte);
router.get('/produto/:id/', ProdutoController.ConsultePorID);
router.get('/carrinho/', privateRouts, PedidoController.ConsultePorUsuario);
router.post('/carrinho/adicionar/', privateRouts, ValidatorsCart.CartAddValidator, PedidoController.Adicionar);
router.delete('/carrinho/excluir/:id', privateRouts, PedidoController.delet);
router.post('/cadastrar/', ValidatorsUser.ValidadorRegistro, UsuarioController.register);
router.post('/entrar/', ValidatorsUser.ValidadorLogin, UsuarioController.Logar);

export default router