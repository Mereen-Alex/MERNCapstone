import React, { useState } from "react";
import CartDetailsView from "../components/cart/CartDetailsView";

const CartPage = ({ cart, updateCart, removeFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.cake.price * item.quantity;
    });
    setTotalPrice(total);
  };

  const handleCheckout = () => {
    // to a payment gateway
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <CartDetailsView cart={cart} removeFromCart={removeFromCart} />
      <div className="cart-details">
        <p>Total Price: ${totalPrice}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
