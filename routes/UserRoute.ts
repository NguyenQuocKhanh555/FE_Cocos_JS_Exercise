import express from 'express';
import { UserController } from '../controllers/UserController.ts';
import { authenticate } from '../middleware/AuthMiddleware.ts';
import { authorize } from '../middleware/RoleMiddleware.ts';
import { Role } from '../models/User.ts';

const router = express.Router();
const userController = new UserController();

router.post('/users', authenticate, authorize(Role.ADMIN), (req, res) => userController.addUser(req, res));
router.put('/users/me', authenticate, (req, res) => userController.updateCurrentUser(req, res));
router.put('/users/id/:userId', authenticate, authorize(Role.ADMIN), (req, res) => userController.updateUser(req, res));
router.delete('/users/:userId', authenticate, authorize(Role.ADMIN), (req, res) => userController.deleteUser(req, res));
router.get('/users', authenticate, authorize(Role.ADMIN), (req, res) => userController.getAllUsers(req, res));
router.get('/users/id/:userId', authenticate, authorize(Role.ADMIN), (req, res) => userController.getUserById(req, res));
router.get('/users/me', authenticate, (req, res) => userController.getCurrentUser(req, res));

export default router;