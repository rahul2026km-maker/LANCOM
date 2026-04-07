import express from 'express';
import { protect } from '../middleware/auth.js';
import {createTask, getTasksAssignedToMe, getTasksByDate, getTasksCreatedByMe, handleGetAllDepartment, markCompleteTask} from '../controllers/taskController.js';
import { departmentOnly } from '../middleware/deparmentOnly.js';

const taskRoutes = express.Router();

taskRoutes.post("/create-new-task",protect,departmentOnly , createTask)
taskRoutes.get("/get-tasks-assigned-to-me", protect , getTasksAssignedToMe),
taskRoutes.get("/get-tasks-created-by-me",protect , departmentOnly , getTasksCreatedByMe)
taskRoutes.get('/by-date/:date', protect, departmentOnly, getTasksByDate);
taskRoutes.post("/mark-complete-task" ,protect , departmentOnly , markCompleteTask)
taskRoutes.post("/get-all-department" , protect , departmentOnly , handleGetAllDepartment)

export default taskRoutes;