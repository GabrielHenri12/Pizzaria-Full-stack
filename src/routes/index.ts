import {Router} from "express";
import * as HomeController from "../controllers/homeController";
import * as cartController from "../controllers/cartController";
import { privateRouts } from "../configuration/passport";

const router = Router();

router.get('/', HomeController.home);
router.get('/pizza/:id/', HomeController.opcao);
router.post('/pizza/adicionar/', cartController.addCart);

router.get('/carrinho', privateRouts, cartController.homeCart);
router.get('/carrinho/:id/diminuir', cartController.decrease);
router.get('/carrinho/:id/aumentar', cartController.increase);
router.get('/carrinho/:id/deletar', cartController.delet);

export default router