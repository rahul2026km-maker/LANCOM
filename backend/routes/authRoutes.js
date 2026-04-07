import { Router } from 'express';
import { login, getMe } from '../controllers/authController.js';
// import { protect } from '../middleware/auth.js';

const authRoutes = Router();

authRoutes.post('/login', login);

export default authRoutes;