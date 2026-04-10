import { AuthService } from '../services/AuthService.ts';
import type { Request, Response } from 'express';

export class AuthController {
    private readonly authService = new AuthService;

    async register(req: Request, res: Response): Promise<void> {
        const { name, email, password } = req.body;
        try {
            const user = await this.authService.register(name, email, password);
            res.status(201).json(user);
        } catch (error) {
            console.log('Error during registration:', error);
            res.status(500).json({ error: 'Failed to register user' });
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        try {
            const result = await this.authService.login(email, password);
            res.status(200).json(result);
        } catch (error) {
            console.log('Error during login:', error);
            res.status(401).json({ error: 'Invalid email or password' });
        }
    }
}