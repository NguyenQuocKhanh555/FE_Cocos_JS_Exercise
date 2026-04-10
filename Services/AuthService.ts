import prisma  from "../lib/prisma.ts";
import { generateToken } from "../utils/jwt.ts";
import { comparePassword, hashPassword } from "../utils/password.ts";
import { Role } from "../models/User.ts";

export class AuthService {
    async register(name: string, email: string, password: string) {
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await hashPassword(password);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    }

    async login(email: string, password: string) {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isPasswordValid = await comparePassword(password, user.password);
        
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        const token = generateToken({
            userId: user.id,
            name: user.name,
            email: user.email,
            role: user.role as Role
        });

        return { token };
    }
}