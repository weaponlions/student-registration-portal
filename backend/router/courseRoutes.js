import { Router } from 'express';
import { createCourse, createBatch, enrollBatch, getCourses } from '../controllers/courseController.js';
const routes = Router()


routes.get('/', getCourses)
routes.post('/create', createCourse)
routes.post('/batch/create', createBatch)
routes.post('/batch/enroll', enrollBatch)


export default routes