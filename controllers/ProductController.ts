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

    async updateProduct(req: Request, res: Response): Promise<void> {
        const { productId } = req.params;
        const { name, price, description, stock } = req.body;
        try {
            const updatedProduct = await this.productService.updateProduct(Number(productId), name, price, description, stock);
            res.status(200).json(updatedProduct);
        } catch (error) {
            console.log('Error updating product:', error);
            res.status(500).json({ error: 'Failed to update product' });
        }
    }

    async deleteProduct(req: Request, res: Response): Promise<void> {
        const { productId } = req.params;
        try {
            await this.productService.deleteProduct(Number(productId));
            res.status(204).send();
        } catch (error) {
            console.log('Error deleting product:', error);
            res.status(500).json({ error: 'Failed to delete product' });
        }
    }

    async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            console.log('Error fetching products:', error);
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    }

    async getProductById(req: Request, res: Response): Promise<void> {
        const { productId } = req.params;
        try {
            const product = await this.productService.getProductById(Number(productId));
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            console.log('Error fetching product:', error);
            res.status(500).json({ error: 'Failed to fetch product' });
        }
    }
}