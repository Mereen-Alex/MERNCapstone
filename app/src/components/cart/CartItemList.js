import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { getCakeData } from "../../cakesdb";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Paper,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartItemList = () => {
  const { cartItems } = useContext(CartContext);

  const {
    removeFromCart,
    getCartItemsCount,
    getTotalCost,
    updateItemsCount,
  } = useContext(CartContext);

  const cartItemsArray = Array.from(Object.values(cartItems));

  return (
    <Container maxWidth="sm" style={{ marginTop: "64px" }}>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          What's in your Cart?
        </Typography>
        {cartItemsArray.length === 0 ? (
          <Typography variant="body1">
            Cart Empty? Let's Change That with Cake Delights!
          </Typography>
        ) : (
          <List>
            {cartItemsArray.map((cartItem) => {
              const { pid, quantity, size } = cartItem;
              const cakeData = getCakeData(pid);

              console.log("Current pid:", pid);

              if (pid === undefined || cakeData === undefined) {
                return null;
              }

              if (!cakeData) {
                return (
                  <ListItem key={pid}>
                    <ListItemText
                      primary={`Product not found`}
                      secondary={`Quantity: ${quantity}, Size: ${size}, Price: 0`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => removeFromCart(pid)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              }
              console.log("Cake data for pid:", pid, "is", cakeData);
              return (
                <ListItem key={pid}>
                  <ListItemText
                    primary={cakeData.name}
                    secondary={`Quantity: ${quantity}, Size: ${size}, Price: ${
                      (cakeData.price[cakeData.sizes.indexOf(size)] || 0) *
                      quantity
                    }`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeFromCart(pid)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Box display="flex" alignItems="center">
                      <IconButton
                        edge="end"
                        aria-label="decrease"
                        onClick={() => updateItemsCount(quantity - 1, pid)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <input
                        value={quantity}
                        onChange={(e) =>
                          updateItemsCount(Number(e.target.value), pid)
                        }
                      />
                      <IconButton
                        edge="end"
                        aria-label="increase"
                        onClick={() => updateItemsCount(quantity + 1, pid)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        )}
        <p>GST & other charges will be shown at Checkout.</p>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/cartdetails"
        >
          Confirm your Purchase
        </Button>
        <Typography variant="h6" gutterBottom>
          Total Items: {getCartItemsCount()}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Total Cost: ${getTotalCost().toFixed(2)}
        </Typography>
      </Paper>
    </Container>
  );
};

export default CartItemList;
