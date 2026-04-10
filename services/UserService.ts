import prisma  from "../lib/prisma.ts";
import { Role } from "../models/User.ts";
import { hashPassword } from "../utils/password.ts";

export class UserService {
    async addUser(name: string, email: string, password: string, role: Role = Role.ADMIN) {
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
                password: hashedPassword,
                role
            }
        });

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    }

    updateUser(userId: number, name: string, email: string, password: string) {
        return prisma.user.update({
            where: { id: userId },
            data: {
                name,
                email,
                password
            }
        });
    }

    deleteUser(userId: number) {
        return prisma.user.delete({
            where: { id: userId }
        });
    }

    getAllUsers() {
        return prisma.user.findMany();
    }

    getUserById(userId: number) {
        return prisma.user.findUnique({
            where: { id: userId }
        });
    }
}