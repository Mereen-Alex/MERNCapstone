import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import CartItemList from "./CartItemList";

const CartDetailsView = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    const gstRate = 0.18;
    const shippingCharges = 25;

    if (!cartItems || cartItems.length === 0) {
      return 0;
    }

    return (
      cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.price);
        const itemQuantity = item.quantity;
        const itemSubtotal = itemPrice * itemQuantity * (1 + gstRate);

        return total + itemSubtotal;
      }, 0) + shippingCharges
    );
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "64px" }}>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Your Cart
        </Typography>
        <CartItemList />
        <List>
          {cartItems &&
            cartItems.map((item) => (
              <div key={item.pid}>
                <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondary={`Quantity: ${item.quantity}, Size: ${item.size}`}
                  />
                  <Typography>
                    Rs.{" "}
                    {(
                      parseFloat(item.price) *
                      item.quantity *
                      (1 + 0.18)
                    ).toFixed(2)}
                  </Typography>
                </ListItem>
                <Divider />
              </div>
            ))}
        </List>
        <Typography variant="h6" gutterBottom>
          Total (including GST and shipping charges): Rs.{" "}
          {calculateTotal().toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/paymentform"
        >
          Proceed to Checkout
        </Button>
        <Button
          sx={{ marginTop: 0, borderRadius: 3 }}
          component={Link}
          to="/login"
        >
          If not logged in, Login
        </Button>
      </Paper>
    </Container>
  );
};

export default CartDetailsView;
