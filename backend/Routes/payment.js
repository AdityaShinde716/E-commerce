import express from "express";
import { allOrders, checkout, userOrder, verify } from "../Controllers/payment.js";
import{Authenticated} from "../Middlewares/auth.js"
const router = express.Router();

router.post("/checkout",checkout);

router.post("/verify-payment",verify);

router.get("/userorder",Authenticated,userOrder);

router.get("/orders",allOrders)

export default router;