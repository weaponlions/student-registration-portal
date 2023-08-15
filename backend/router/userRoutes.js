import { Router } from "express";
import { userStepOne, userStepTwo, userStepThree } from "../controllers/userController.js";


const routes = Router();

routes.post('/step_one', userStepOne)
routes.post('/step_two', userStepTwo)
routes.post('/step_three', userStepThree)


export default routes;