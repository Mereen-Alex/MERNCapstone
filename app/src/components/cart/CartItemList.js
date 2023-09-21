import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { getCakeData } from "../../cakesdb";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,  
  ListItemSecondaryAction,
  IconButton,
  Button,
  Paper,
  Box,  
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartItemList = () => {
  const {
    cartItems,
    removeFromCart,
    getCartItemsCount,
    getTotalCost,
    updateItemsCount,
  } = useContext(CartContext);

  return (
    <Container maxWidth="md" style={{ marginTop: "64px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Your Cart
        </Typography>
        {Object.keys(cartItems).length === 0 ? (
          <Typography variant="body1">
            Your shopping cart is currently empty.
          </Typography>
        ) : (
          <List>
            {Object.keys(cartItems).map((pid) => {
              const cartItem = cartItems[pid];
              const cakeData = getCakeData(pid);

              if (!cakeData) {
                return null;
              }

              const sizeIndex = cakeData.sizes.indexOf(cartItem.size);
              const selectedPrice =
                sizeIndex !== -1 ? parseFloat(cakeData.price[sizeIndex]) : 0;

              return (
                <ListItem key={pid}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <CardMedia
                        component="img"
                        height="100"
                        image={cakeData.image}
                        alt={cakeData.name}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <CardContent>
                        <Typography variant="h6">{cakeData.name}</Typography>
                        <Typography variant="body2">
                          Size: {cartItem.size}, Price: Rs.
                          {(selectedPrice * cartItem.quantity).toFixed(2)}
                        </Typography>
                        <Box display="flex" alignItems="center" marginTop={2}>
                          <Typography variant="body2">Quantity:</Typography>
                          <IconButton
                            edge="end"
                            aria-label="decrease"
                            onClick={() =>
                              updateItemsCount(
                                cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
                                pid
                              )
                            }
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography
                            variant="body2"
                            style={{ marginLeft: "8px" }}
                          >
                            {cartItem.quantity}
                          </Typography>
                          <IconButton
                            edge="end"
                            aria-label="increase"
                            onClick={() =>
                              updateItemsCount(cartItem.quantity + 1, pid)
                            }
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Grid>
                  </Grid>
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeFromCart(pid, cartItem.size)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        )}
        <p>GST & other charges calculated at Checkout.</p>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/cartdetails"
        >
          Confirm Your Purchase
        </Button>
        <Typography variant="h6" gutterBottom>
          Total Items: {getCartItemsCount()}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Total Cost: Rs.{getTotalCost().toFixed(2)}
        </Typography>
      </Paper>
    </Container>
  );
};

export default CartItemList;
