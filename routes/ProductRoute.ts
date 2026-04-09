import express from 'express';
import { ProductController } from '../controllers/ProductController.ts';

const router = express.Router();
const productController = new ProductController();

router.post('/products', (req, res) => productController.addProduct(req, res));
router.put('/products/:productId', (req, res) => productController.updateProduct(req, res));
router.delete('/products/:productId', (req, res) => productController.deleteProduct(req, res));
router.get('/products', (req, res) => productController.getAllProducts(req, res));
router.get('/products/:productId', (req, res) => productController.getProductById(req, res));

export default router;