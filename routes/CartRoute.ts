import { CartController } from "../controllers/CartController.ts";
import express from 'express';
import { authenticate } from "../middleware/AuthMiddleware.ts";

const router = express.Router();
const cartController = new CartController();

router.get('/cart', authenticate, (req, res) => cartController.getMyCart(req, res));
router.post('/cart/add', authenticate, (req, res) => cartController.addToCart(req, res));
router.delete('/cart/remove/:cartItemId', authenticate, (req, res) => cartController.removeFromCart(req, res));
router.delete('/cart/clear', authenticate, (req, res) => cartController.clearCart(req, res));

export default router;