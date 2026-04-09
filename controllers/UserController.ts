import type { Request, Response } from 'express';
import { UserService } from '../services/UserService.ts';

export class UserController {
    private readonly userService = new UserService;

    async addUser(req: Request, res: Response): Promise<void> {
        const { username, email, password } = req.body;
        try {
            const user = await this.userService.addUser(username, email, password);
            res.status(201).json(user);
        } catch (error) {
            console.log('Error adding user:', error);
            res.status(500).json({ error: 'Failed to add user' });
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        const { userId } = req.params;
        const { username, email, password, role } = req.body;
        try {
            const updatedUser = await this.userService.updateUser(Number(userId), username, email, password, role);
            res.status(200).json(updatedUser);
        } catch (error) {
            console.log('Error updating user:', error);
            res.status(500).json({ error: 'Failed to update user' });
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        const { userId } = req.params;
        try {
            await this.userService.deleteUser(Number(userId));
            res.status(204).send();
        } catch (error) {
            console.log('Error deleting user:', error);
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }

    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            console.log('Error fetching users:', error);
            res.status(500).json({ error: 'Failed to fetch users' });
        }
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        const { userId } = req.params;
        try {
            const user = await this.userService.getUserById(Number(userId));
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            console.log('Error fetching user:', error);
            res.status(500).json({ error: 'Failed to fetch user' });
        }
    }
}