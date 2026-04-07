import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import { getDepartments } from '../controllers/departmentController.js';

const departmentRoutes = Router();

departmentRoutes.get('/', protect, getDepartments);

export default departmentRoutes;