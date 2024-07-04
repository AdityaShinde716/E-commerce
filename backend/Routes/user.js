import express from "express";
import { login, profile, register, users } from "../Controllers/user.js";
import { getProductById, updateProductById } from "../Controllers/product.js";
import { Authenticated } from "../Middlewares/auth.js";


const router = express.Router();

router.post('/register',register);

router.post("/login",login);

router.get("/all",users);

router.get("/profile",Authenticated,profile)



export default router

