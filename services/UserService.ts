import prisma  from "../lib/prisma.ts";

enum Role {
    CUSTOMER = 'CUSTOMER',
    ADMIN = 'ADMIN'
}

export class UserService {
    async addUser(name: string, email: string, password: string, role: Role = Role.CUSTOMER) {
        return await prisma.user.create({
            data: {
                name,
                email,
                password,
                role
            }
        });
    }

    updateUser(userId: number, name: string, email: string, password: string, role: Role) {
        return prisma.user.update({
            where: { id: userId },
            data: {
                name,
                email,
                password,
                role
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