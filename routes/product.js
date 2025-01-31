import Product from "../models/product.js";

import "dotenv/config";
import express from "express";
import {
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", addProducts);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

export default router;
