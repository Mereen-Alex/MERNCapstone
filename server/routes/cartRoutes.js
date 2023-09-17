import express from "express";
import Cart from "../models/cartModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const result = await newCart.save();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Cart.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});


router.get("/usercart", async (req, res) => {
  const userId = req.user.id; // Extract user ID (JWT token)

  try {
    const userCart = await Cart.findOne({ userId }).populate("items.cakeId");
    if (!userCart) {
      return res.status(404).json({ message: "User cart not found" });
    }
    res.status(200).json(userCart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
