import express from 'express';
import { addToCart, clearCart, decreaseProudctQty, removeProductFromCart, userCart } from '../Controllers/cart.js';
import { Authenticated } from '../Middlewares/auth.js';


const router = express.Router();

router.post('/add',Authenticated,addToCart);

router.get("/user",Authenticated,userCart);

router.delete("/remove/:productId",Authenticated,removeProductFromCart);
router.delete("/clear",Authenticated,clearCart);

router.post("/--qty",Authenticated,decreaseProudctQty);

export default router;