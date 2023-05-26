import { Router } from "express";
import { privateRouts } from "../middlewares/Auth";
import ProdutoController from "../controllers/ProdutoController";
import PedidoController from "../controllers/PedidoController";
import UsuarioController from "../controllers/ususarioController"
import * as ValidadorUsuario from "../middlewares/ValidadorUsuario";
import * as ValidadorPedido from "../middlewares/ValidadorPedido"

const router = Router();

//Produtos
router.get('/produtos', ProdutoController.Consulte);
router.get('/produto/:id/', ProdutoController.ConsultePorID);

//Pedidos
router.get('/pedidos/', privateRouts, PedidoController.ConsultePorUsuario);
router.post('/pedido/adicionar/', privateRouts, ValidadorPedido.CartAddValidator, PedidoController.Adicionar);
router.delete('/pedido/excluir/:id', privateRouts, PedidoController.Deletar);

//Usuario
router.post('/cadastrar/', ValidadorUsuario.ValidadorRegistro, UsuarioController.register);
router.post('/entrar/', ValidadorUsuario.ValidadorLogin, UsuarioController.Logar);

export default router