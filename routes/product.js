import Product from "../models/product.js";

import "dotenv/config";
import express from "express";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProductByName,
  getIndexes,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", addProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.get("/search", searchProductByName);

getIndexes();

export default router;
