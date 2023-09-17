import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";

const PaymentForm = () => {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [savePaymentInfo, setSavePaymentInfo] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [sameAsShipping, setSameAsShipping] = useState(false);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    navigate("/billpay");

    //const response = await axios.post("/api/orders", )
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        backgroundColor: "#ecf4f6",        
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row", 
      }}
    >
      <form onSubmit={handlePaymentSubmit} style={{ flex: 1, padding: "20px" }}>
        
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Phone"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Shipping Address"
              fullWidth
              sx={{ width: "100%" }}
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Billing Address"
              fullWidth
              sx={{ width: "100%" }}
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={sameAsShipping}
                  onChange={() => setSameAsShipping(!sameAsShipping)}
                />
              }
              label="Same as Shipping Address"
            />
          </Grid>
        </Grid>
      </form>

      <form
        onSubmit={handlePaymentSubmit}
        style={{ flex: 1, padding: "20px", marginRight: "15px" }}
      >        
        <Typography variant="h6" gutterBottom>
          Payment Method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              label="Card Number"
              fullWidth
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Cardholder Name"
              fullWidth
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Expiry Date"
              fullWidth
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="CVV"
              fullWidth
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={savePaymentInfo}
                  onChange={() => setSavePaymentInfo(!savePaymentInfo)}
                />
              }
              label="Save payment information for future purchases"
            />
          </Grid>
        </Grid>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button type="submit" variant="contained" color="primary">
            Proceed to Pay
            <Link to="/billpay"></Link>
          </Button>
          <div>
            <img
              src="/visa-logo.png"
              alt="Visa"
              style={{ marginRight: "10px" }}
            />
            <img
              src="/mastercard-logo.png"
              alt="Mastercard"
              style={{ marginRight: "10px" }}
            />
            <img src="/gpay-logo.png" alt="GPay" />
          </div>
        </div>
      </form>
    </Paper>
  );
};

export default PaymentForm;
