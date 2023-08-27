import { Router } from "express"; 
import { userStepOne, userStepTwo, userStepThree, fileReciever } from "../controllers/userController.js";
import { verifyJwt } from "../middleware/fetchuser.js";

const routes = Router();

routes.post('/step_one', verifyJwt, userStepOne)
routes.post('/step_two', verifyJwt, userStepTwo)
routes.post('/step_three', verifyJwt, userStepThree)
routes.post('/recieve', fileReciever)


export default routes;