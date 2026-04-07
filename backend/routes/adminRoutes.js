import { Router } from 'express';
import { registerDepartment, getAllDepartments } from '../controllers/adminController.js';
import { protect } from '../middleware/auth.js';
import { adminOnly } from '../middleware/isAdmin.js';

const adminRoutes = Router()

adminRoutes.post('/register-department', protect , adminOnly , registerDepartment);
adminRoutes.get('/departments', getAllDepartments);

export default adminRoutes;