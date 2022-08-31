import {Router} from "express";
import * as HomeController from "../controllers/homeController";

const router = Router();

router.get('/', HomeController.home);
router.get('/pizza/:id/escolher', HomeController.opcao);

export default router