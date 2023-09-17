import React, { createContext, useState, useEffect } from "react";
import { getCakeData } from "./cakesdb";

export const CartContext = createContext({
  cartItems: {},
  getCartItemsCount: () => {},
  getItemQuantity: () => {},
  updateItemsCount: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalCost: () => {},
});

export const CartProvider = ({ children }) => {
  const defaultCart = {};

  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    console.log("Initial cartItems:", cartItems);
  }, []);

  const getCartItemsCount = () => {
    let totalCount = 0;
    for (const pid in cartItems) {
      if (cartItems.hasOwnProperty(pid)) {
        totalCount += cartItems[pid].quantity;
      }
    }
    return totalCount;
  };

  const getItemQuantity = (pid) => {
    const quantity = cartItems[pid] || 0;
    return quantity;
  };

  const updateItemsCount = (newAmount, cartItemId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [cartItemId]: newAmount,
    }));
  };

  const addToCart = (pid, selectedSize) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };

      if (updatedCartItems[pid]) {
        updatedCartItems[pid].quantity += 1;
        updatedCartItems[pid].size = selectedSize;
      } else {
        updatedCartItems[pid] = { quantity: 1, size: selectedSize };
      }

      console.log("Updated cartItems:", updatedCartItems);

      return updatedCartItems;
    });
  };

  const removeFromCart = (pid) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      
      if (updatedCartItems[pid] && updatedCartItems[pid].quantity > 0) {
        updatedCartItems[pid].quantity -= 1;
      }
      if (updatedCartItems[pid] && updatedCartItems[pid].quantity === 0) {
        delete updatedCartItems[pid];
      }
      return updatedCartItems;
    });
  };

  const getTotalCost = () => {
    let totalCost = 0;
    for (const pid in cartItems) {
      if (cartItems.hasOwnProperty(pid)) {
        const { quantity, size } = cartItems[pid];
        const cakeData = getCakeData(pid);
        if (cakeData && cakeData.sizes.includes(size)) {
          const sizeIndex = cakeData.sizes.indexOf(size);
          const selectedPrice = parseFloat(cakeData.price[sizeIndex]);

          // const sizeInKg = size.replace(/ g/, "");

          totalCost += selectedPrice * quantity;
        } else {
          console.log("Invalid selection: " + pid);
        }
      }
    }
    return totalCost;
  };

  const checkout = () => {
    setCartItems(defaultCart);
  };

  const contextValue = {
    cartItems,
    getCartItemsCount,
    getItemQuantity,
    updateItemsCount,
    addToCart,
    removeFromCart,
    getTotalCost,
    checkout,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
