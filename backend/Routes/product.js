import express from "express";
import { addProduct, deleteProductById, getProductById, getProducts, updateProductById } from "../Controllers/product.js";

const router= express.Router();

router.post("/add",addProduct);

router.get("/all",getProducts);

router.get("/:id",getProductById);

router.put("/:id",updateProductById);
router.delete("/:id",deleteProductById);

export default router