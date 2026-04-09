import prisma from '../lib/prisma.ts';

export class ProductService {
    async addProduct(name: string, price: number, description: string, stock: number) {
        return await prisma.product.create({
            data: {
                name,
                price,
                description,
                stock
            }
        });
    }

    updateProduct(productId: number, name: string, price: number, description: string, stock: number) {
        return prisma.product.update({
            where: { id: productId },
            data: {
                name,
                price,
                description,
                stock
            }
        });
    }

    deleteProduct(productId: number) {
        return prisma.product.delete({
            where: { id: productId }
        });
    }

    getAllProducts() {
        return prisma.product.findMany();
    }

    getProductById(productId: number) {
        return prisma.product.findUnique({
            where: { id: productId }
        });
    }
}