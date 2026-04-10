import express from 'express';
import { ProductController } from '../controllers/ProductController.ts';
import { authenticate } from '../middleware/AuthMiddleware.ts';
import { authorize } from '../middleware/RoleMiddleware.ts';
import { Role } from '../models/User.ts';

const router = express.Router();
const productController = new ProductController();

router.post('/products', authenticate, authorize(Role.ADMIN), (req, res) => productController.addProduct(req, res));
router.put('/products/:productId', authenticate, authorize(Role.ADMIN), (req, res) => productController.updateProduct(req, res));
router.delete('/products/:productId', authenticate, authorize(Role.ADMIN), (req, res) => productController.deleteProduct(req, res));
router.get('/products', (req, res) => productController.getAllProducts(req, res));
router.get('/products/:productId', (req, res) => productController.getProductById(req, res));

export default router;