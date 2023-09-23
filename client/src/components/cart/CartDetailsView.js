import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import { getCakeData } from "../../cakesdb";
import { styled } from "@mui/material/styles";
import { Container, Typography, Divider, Button, Paper } from "@mui/material";

const CartDetailsView = () => {
  const { cartItems, getTotalCost } = useContext(CartContext);

  const selectedItems = Object.keys(cartItems).map((pid) => {
    const cartItem = cartItems[pid];
    const itemData = getCakeData(pid);

    const sizeIndex = itemData.sizes.indexOf(cartItem.size);
    const selectedPrice =
      sizeIndex !== -1 ? parseFloat(itemData.price[sizeIndex]) : 0;

    const totalPrice = selectedPrice * cartItem.quantity;

    return {
      ...cartItem,
      pid,
      image: itemData.image,
      name: itemData.name,
      price: totalPrice.toFixed(2),
    };
  });

  console.log("Selected Items:", selectedItems);

  const subtotal = getTotalCost();

  const gstRate = 0.18;
  const shippingCharges = 25;
  const gstAmount = subtotal * gstRate;
  const totalAmount = subtotal + gstAmount + shippingCharges;

  const OrderContainer = styled("div")({
    textAlign: "left",
    marginBottom: "24px",
    paddingTop: "16px",
  });

  const Image = styled("img")({
    width: "80px",
    marginRight: "16px",
  });

  const ItemContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  });

  const ItemDetails = styled("div")({
    flexGrow: 1,
  });

  const SubtotalContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  });

  const TotalContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  return (
    <Container maxWidth="md" style={{ marginTop: "64px" }}>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Your Order
        </Typography>

        {selectedItems.map((item) => (
          <OrderContainer key={item.pid}>
            <Image src={item.image} alt={item.name} />
            <ItemContainer>
              <ItemDetails>
                <Typography variant="body1">
                  {item.name}
                  <br />
                  Size: {item.size}, Quantity: {item.quantity}
                </Typography>
                <Typography variant="body2">
                  Price: INR {item.price}
                </Typography>
              </ItemDetails>
            </ItemContainer>
          </OrderContainer>
        ))}

        <Divider style={{ margin: "16px 0" }} />

        <SubtotalContainer>
          <Typography variant="body2">Subtotal:</Typography>
          <Typography variant="body2">INR. {subtotal.toFixed(2)}</Typography>
        </SubtotalContainer>
        <SubtotalContainer>
          <Typography variant="body2">GST @18%:</Typography>
          <Typography variant="body2">INR. {gstAmount.toFixed(2)}</Typography>
        </SubtotalContainer>
        <SubtotalContainer>
          <Typography variant="body2">Shipping:</Typography>
          <Typography variant="body2">INR. {shippingCharges}</Typography>
        </SubtotalContainer>

        <Divider style={{ margin: "16px 0" }} />

        <TotalContainer>
          <Typography variant="h6">Total (including taxes):</Typography>
          <Typography variant="h6">INR. {totalAmount.toFixed(2)}</Typography>
        </TotalContainer>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/paymentform"
        >
          Proceed to Checkout
        </Button>
        <Button
          sx={{ marginTop: 2, borderRadius: 3 }}
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
