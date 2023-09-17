import express from "express";
const router = express.Router();
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} from "../controllers/orderController.js";

router.post("/", createOrder); //  /api/orders

// (admin-only)
router.get("/", getOrders); //  /api/orders

// (admin-only)
router.get("/:id", getOrderById); //  /api/orders/:id

// (admin-only)
router.put("/:id", updateOrderStatus); //  /api/orders/:id

export default router;
