import { Router } from 'express';
import { createCourse } from '../controllers/courseController.js';
const routes = Router()


routes.post('/create', createCourse)


export default routes