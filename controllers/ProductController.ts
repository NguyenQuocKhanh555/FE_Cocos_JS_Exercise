import type {Request, Response} from 'express';
import { ProductService } from '../services/ProductService.ts';

export class ProductController {
    private readonly productService = new ProductService;

    async addProduct(req: Request, res: Response): Promise<void> {
        const { name, price, description, stock } = req.body;
        try {
            const product = await this.productService.addProduct(name, price, description, stock);
            res.status(201).json(product);
        } catch (error) {
            console.log('Error adding product:', error);
            res.status(500).json({ error: 'Failed to add product' });
        }
    }
}