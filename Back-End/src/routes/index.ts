import { Router } from "express";
import { privateRouts } from "../middlewares/Auth";
import * as pizzaController from "../controllers/ProdutoController";
import * as cartController from "../controllers/cartController";
import * as usersController from "../controllers/usersController"
import * as ValidatorsUser from "../middlewares/ValidatorsUser";
import * as ValidatorsCart from "../middlewares/ValidatorsCart"

const router = Router();

router.get('/produtos', pizzaController.Consulte);
router.get('/produto/:id/', pizzaController.ConsultePorID);
router.get('/carrinho/', privateRouts, cartController.FindAllCarts);
router.post('/carrinho/adicionar/', ValidatorsCart.CartAddValidator, privateRouts, cartController.addCart);
router.delete('/carrinho/excluir/:id', privateRouts, cartController.delet);
router.post('/cadastrar/', ValidatorsUser.RegisterValidator, usersController.register);
router.post('/entrar/', ValidatorsUser.LoginValidator, usersController.login);

export default router