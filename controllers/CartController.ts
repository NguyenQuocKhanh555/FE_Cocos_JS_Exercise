import type { Response } from 'express';
import { CartService } from '../services/CartService.ts';
import { ProductService } from '../services/ProductService.ts';
import type { AuthRequest } from '../middleware/AuthMiddleware.ts';

export class CartController {
    private readonly cartService = new CartService();
    private readonly productService = new ProductService();

    async getMyCart(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.userId;
            
            if (!userId) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            const cart = await this.cartService.getMyCart(userId);
            res.status(200).json(cart);
        } catch (error) {
            console.error('Error fetching cart:', error);
            res.status(500).json({ error: 'Failed to fetch cart' });
        }
    }

    async addToCart(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.userId;
            const { productId, quantity } = req.body;

            if (!userId) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            if (!productId || quantity <= 0) {
                return res.status(400).json({ error: 'Invalid input' });
            }

            const product = await this.productService.getProductById(productId);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            const updatedCart = await this.cartService.addToCart(userId, productId, quantity);
            res.status(200).json(updatedCart);
        } catch (error) {
            console.error('Error adding to cart:', error);
            res.status(500).json({ error: 'Failed to add to cart' });
        }
    }

    async removeFromCart(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.userId;
            const { cartItemId } = req.params;

            if (!userId) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            await this.cartService.removeFromCart(Number(cartItemId));
            res.status(204).send();
        } catch (error) {
            console.error('Error removing from cart:', error);
            res.status(500).json({ error: 'Failed to remove from cart' });
        }
    }

    async clearCart(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.userId;

            if (!userId) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            await this.cartService.clearCart(userId);
            res.status(204).send();
        } catch (error) {
            console.error('Error clearing cart:', error);
            res.status(500).json({ error: 'Failed to clear cart' });
        }
    }
}