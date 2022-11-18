import {Router} from "express";
import * as HomeController from "../controllers/homeController";
import * as cartController from "../controllers/cartController";
import * as usersController from "../controllers/usersController"
import { privateRouts } from "../configuration/passport";

const router = Router();

router.get('/home', HomeController.home);
router.get('/pizza/:id/', HomeController.opcao);
router.post('/pizza/adicionar/', cartController.addCart);

router.get('/carrinho', privateRouts, cartController.homeCart);
router.get('/carrinho/:id/diminuir', cartController.decrease);
router.get('/carrinho/:id/aumentar', cartController.increase);
router.get('/carrinho/:id/deletar', cartController.delet);

router.post('/user/cadastre/', usersController.cadastre);
router.post('/user/login/', usersController.login)

export default router