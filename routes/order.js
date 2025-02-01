import express from "express";
import {
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getOrders);

router.post("/", addOrder);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

export default router;
