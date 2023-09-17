import express from "express";
import Cart from "../models/cartModel.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/api/carts/addtocart", protect, async (req, res) => {
  try {
    const userId = req.user.id;
    const { cakeId, quantity } = req.body;

    let userCart = await Cart.findOne({ user: userId });

    if (!userCart) {
      userCart = new Cart({ user: userId, items: [] });
    }

    userCart.items.push({ cake: cakeId, quantity: quantity });
    await userCart.save();

    res.status(200).json({ message: "Item added to cart successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/api/carts/removefromcart", protect, async (req, res) => {
  try {
    const userId = req.user.id;
    const { cakeId } = req.body;

    let userCart = await Cart.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ message: "User cart not found" });
    }

    userCart.items = userCart.items.filter(
      (item) => item.cake.toString() !== cakeId
    );
    await userCart.save();

    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/api/carts/clear-cart", protect, (req, res) => {
  const userId = req.user.id; // Extract from the token

  clearUserCart(userId);

  res.status(200).json({ message: "Cart cleared successfully" });
});

export default router;
