import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";

import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { toast } from "react-toastify";

const CakeCard = ({ cake }) => {
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(cake.sizes[0]);
  const [showDetails, setShowDetails] = useState(false);
  const [price, setPrice] = useState(parseFloat(cake.price[0]));

  const navigate = useNavigate();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSelectedSize(selectedSize);

    const selectedPrice = cake.price[cake.sizes.indexOf(selectedSize)];
    setPrice(parseFloat(selectedPrice));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const newCartItem = {
      pid: cake.pid,
      name: cake.name,
      quantity: quantity,
      size: selectedSize,
      price: price,
    };
    addToCart(cake.pid, selectedSize);

    console.log(newCartItem);

    toast.success("Added cake successfully!");
  };

  const handleBuyNow = () => {
    const newItem = {
      pid: cake.pid,
      name: cake.name,
      quantity: quantity,
      size: selectedSize,
      price: price,
    };

    addToCart(cake.pid, selectedSize);
    console.log(newItem);

    navigate("/cartdetails");
  };

  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        alt={cake.name}
        height="320"
        image={cake.image}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {cake.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {cake.description}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="body2" color="textSecondary">
            Category: {cake.category}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="body2" color="textSecondary">
            Cake Flavor: {cake.cakeflavor}
          </Typography>
        </Box>

        {showDetails && (
          <>
            <Box marginTop={2}>
              <FormControl fullWidth>
                <InputLabel>Select the size:</InputLabel>
                <Select value={selectedSize} onChange={handleSizeChange}>
                  {cake.sizes.map((size, index) => (
                    <MenuItem key={index} value={size}>
                      {size} - Rs. {cake.price[index]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box display="flex" alignItems="center" marginTop={2}>
              <Typography variant="body2">Quantity:</Typography>
              <Button onClick={handleDecreaseQuantity}>-</Button>
              <Typography variant="body2">{quantity}</Typography>
              <Button onClick={handleIncreaseQuantity}>+</Button>
            </Box>
            <Box marginTop={2} display="flex" justifyContent="space-between">
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleBuyNow}
              >
                BUY NOW
              </Button>
            </Box>
          </>
        )}
        <Button
          variant="outlined"
          color="primary"
          onClick={toggleDetails}
          style={{ marginTop: "16px" }}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CakeCard;
