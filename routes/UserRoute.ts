import express from 'express';
import { UserController } from '../controllers/UserController.ts';

const router = express.Router();
const userController = new UserController();

router.post('/users', (req, res) => userController.addUser(req, res));
router.put('/users/:userId', (req, res) => userController.updateUser(req, res));
router.delete('/users/:userId', (req, res) => userController.deleteUser(req, res));
router.get('/users', (req, res) => userController.getAllUsers(req, res));
router.get('/users/:userId', (req, res) => userController.getUserById(req, res));

export default router;