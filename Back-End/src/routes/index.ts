import { Router } from "express";
import * as pizzaController from "../controllers/pizzaController";
import * as cartController from "../controllers/cartController";
import * as usersController from "../controllers/usersController"
import { privateRouts } from "../middlewares/Auth";
import * as Validations from "../middlewares/Validators";

const router = Router();

router.get('/opcoes', pizzaController.home);
router.get('/pizza/:id/', pizzaController.opcao);
router.get('/carrinho/', privateRouts, cartController.homeCart);
router.post('/carrinho/adicionar/', privateRouts, cartController.addCart);
router.delete('/carrinho/:id/deletar', privateRouts, cartController.delet);
router.post('/cadastrar/',Validations.RegisterValidator, usersController.register);
router.post('/entrar/',Validations.LoginValidator  , usersController.login)

export default router