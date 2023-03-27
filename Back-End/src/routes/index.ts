import { Router } from "express";
import * as HomeController from "../controllers/homeController";
import * as cartController from "../controllers/cartController";
import * as usersController from "../controllers/usersController"
import { privateRouts } from "../configuration/passport";

const router = Router();

router.get('/opcoes', HomeController.home);
router.get('/pizza/:id/', HomeController.opcao);
router.get('/carrinho/', privateRouts, cartController.homeCart);
router.post('/carrinho/adicionar/', privateRouts, cartController.addCart);
router.delete('/carrinho/:id/deletar', cartController.delet);
router.post('/user/cadastrar/', usersController.register);
router.post('/user/entrar/', usersController.login)

export default router