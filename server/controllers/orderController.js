import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @Private POST /api/orders
const createOrder = asyncHandler(async (req, res) => {
  const { customer, items } = req.body;

  const order = new Order({
    customer,
    items,
    status: "Pending",
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
});

// @Private (admin) GET /api/orders
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
});

// @Private (admin only)  GET /api/orders/:id
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @Private (admin only)  PUT /api/orders/:id
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const order = await Order.findById(req.params.id);

  if (order) {
    order.status = status;

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

export { createOrder, getOrders, getOrderById, updateOrderStatus };
