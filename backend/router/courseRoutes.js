import { Router } from 'express';
import { createCourse, createBatch, enrollBatch, tempCourse } from '../controllers/courseController.js';
const routes = Router()


routes.get('/', tempCourse)
routes.post('/create', createCourse)
routes.post('/batch/create', createBatch)
routes.post('/batch/enroll', enrollBatch)


export default routes