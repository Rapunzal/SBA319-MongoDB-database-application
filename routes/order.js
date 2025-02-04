import express from "express";
import {
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

//Get orders route
router.get("/", getOrders);

//Add orders route
router.post("/", addOrder);

//Update orders
router.put("/:id", updateOrder);

//Delete Orders
router.delete("/:id", deleteOrder);

export default router;
