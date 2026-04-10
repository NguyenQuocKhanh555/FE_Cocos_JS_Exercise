import prisma from "../lib/prisma.ts";

export class CartService {
    async getOrCreateCart(userId: number) {
        let cart = await prisma.cart.findUnique({
            where: { userId },
            include: {
                items: {
                    include: {
                        product: true,
                    },
                },
            },
        });

        if (!cart) {
            cart = await prisma.cart.create({
                data: { userId },
                include: {
                    items: {
                        include: {
                            product: true,
                        },
                    },
                },
            });
        }

        return cart;
    }

    async addToCart(userId: number, productId: number, quantity: number) {
        const cart = await this.getOrCreateCart(userId);

        const existingItem = await prisma.cartItem.findUnique({
            where: {
                cartId_productId: {
                    cartId: cart.id,
                    productId
                },
            },
        });

        if (existingItem) {
            return prisma.cartItem.update({
                where: { id: existingItem.id },
                data: { 
                    quantity: existingItem.quantity + quantity
                },
            });
        }

        return prisma.cartItem.create({
            data: {
                cartId: cart.id,
                productId,
                quantity,
            },
        });
    }

    async getMyCart(userId: number) {
        const cart = await prisma.cart.findUnique({
            where: { userId },
            include: {
                items: {
                    include: {
                        product: true,
                    },
                },
            },
        });

        return cart;
    }

    async removeFromCart(cartItemid: number) {
        return prisma.cartItem.delete({
            where: { id: cartItemid },
        });
    }

    async clearCart(userId: number) {
        const cart = await prisma.cart.findUnique({
            where: { userId },
        });

        if (!cart) {
            return null;
        }

        return prisma.cartItem.deleteMany({
            where: { cartId: cart.id },
        });
    }
}