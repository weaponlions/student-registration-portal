import { Router } from 'express';
import { createCourse, createBatch, enrollBatch, getCourse } from '../controllers/courseController.js';
const routes = Router()

 
routes.get('/', getCourse)
routes.post('/create', createCourse)
routes.post('/batch/create', createBatch)
routes.post('/batch/enroll', enrollBatch)


export default routes