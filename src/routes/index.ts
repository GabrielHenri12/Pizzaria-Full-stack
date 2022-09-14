import {Router} from "express";
import * as HomeController from "../controllers/homeController";
import * as cartController from "../controllers/cartController";

const router = Router();

router.get('/', HomeController.home);
router.get('/pizza/:id/', HomeController.opcao);
router.post('/pizza/adicionar/', cartController.addCart);

export default router