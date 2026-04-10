import type { NextFunction, Response } from 'express';
import type { AuthRequest } from './AuthMiddleware.ts';
import { Role } from '../models/User.ts';

export const authorize = (...roles: Role[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        next();
    }
}