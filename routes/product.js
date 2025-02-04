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

//Get Product route
router.get("/", getProducts);

//get product by id route
router.get("/product/:id", getProductById);

//Add product route
router.post("/", addProduct);

//Update product route
router.put("/:id", updateProduct);

//Delete product route
router.delete("/:id", deleteProduct);

//Search product by name route
router.get("/search", searchProductByName);

getIndexes();

export default router;
