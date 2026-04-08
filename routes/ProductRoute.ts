import express from 'express';
import { ProductController } from '../controllers/ProductController.ts';

const router = express.Router();
const productController = new ProductController();

router.post('/products', (req, res) => productController.addProduct(req, res));

export default router;