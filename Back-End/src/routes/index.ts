import { Router } from "express";
import * as pizzaController from "../controllers/pizzaController";
import * as cartController from "../controllers/cartController";
import * as usersController from "../controllers/usersController"
import { privateRouts } from "../configuration/passport";

const router = Router();

router.get('/opcoes', pizzaController.home);
router.get('/pizza/:id/', pizzaController.opcao);
router.get('/carrinho/', privateRouts, cartController.homeCart);
router.post('/carrinho/adicionar/', privateRouts, cartController.addCart);
router.delete('/carrinho/:id/deletar', privateRouts, cartController.delet);
router.post('/user/cadastrar/', usersController.register);
router.post('/user/entrar/', usersController.login)

export default router