import {Router} from "express";
import * as usersController from "../controllers/usersController"


const router = Router();

router.post('/user/cadastre/', usersController.cadastre);
router.post('/user/login/', usersController.login)

export default router