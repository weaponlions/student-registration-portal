import { Router } from 'express'; 
import { fetUser } from '../middleware/FetchUsersForAdmin.js';
import { delUser } from '../controllers/adminController.js';

const router = Router(); 


router.put('/delUser',fetUser, delUser)


export default router