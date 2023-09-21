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
    const item = cartItems[pid];
    return item ? item.quantity : 0;
  };

  const updateItemsCount = (newAmount, pid) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[pid]) {
        updatedCartItems[pid].quantity = newAmount;
      }
      return updatedCartItems;
    });
  };

  const addToCart = (pid, selectedSize) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems[pid];
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        prevCartItems[pid] = {
          size: selectedSize,
          quantity: 1,
        };
      }
      return { ...prevCartItems }; // Create a new object to trigger a re-render
    });
  };

  const removeFromCart = (pid) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      delete updatedCartItems[pid];
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
