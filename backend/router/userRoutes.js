import { Router } from "express"; 
import { userStepOne, userStepTwo, userStepThree, fileReciever, userInformation ,AppHistory} from "../controllers/userController.js";
import { verifyJwt } from "../middleware/fetchuser.js";

const routes = Router();

routes.post('/step_one', verifyJwt, userStepOne);
routes.post('/step_two', verifyJwt, userStepTwo);
routes.post('/step_three', verifyJwt, userStepThree);
routes.post('/user_info', verifyJwt, userInformation)
routes.post('/file_reciever',  verifyJwt, fileReciever);
routes.post('/app_history',  verifyJwt, AppHistory);


export default routes;