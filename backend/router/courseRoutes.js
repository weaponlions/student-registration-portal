import { Router } from 'express';
import { createCourse, createBatch, enrollBatch, getCourses, createCategory, getCategories, updateCategory } from '../controllers/courseController.js';
const routes = Router()


routes.get('/', getCourses)
routes.post('/', createCourse)

routes.get('/category', getCategories)
routes.post('/category', createCategory)
routes.put('/category', updateCategory)

routes.post('/batch/create', createBatch)
routes.post('/batch/enroll', enrollBatch)


export default routes