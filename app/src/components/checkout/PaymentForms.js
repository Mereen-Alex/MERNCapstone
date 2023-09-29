import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";

const simulatePayment = async (values) => {
  try {
    return true;
  } catch (error) {
    console.error("Payment error:", error);
    return false;
  }
};

const PaymentForms = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Name must contain only letters and spaces")
      .required("Name is required"),
    phone: Yup.string()
      .matches(
        /^(\d{10}|\d{3}-\d{3}-\d{4}|\d{5} \d{5})$/,
        "Phone number must be a valid format"
      )
      .required("Phone number is required"),
    cardNumber: Yup.string()
      .matches(/^\d{16}$/, "Card number must be 16 digits")
      .required("Card number is required"),
    cardName: Yup.string().required("Cardholder name is required"),
    expiryDate: Yup.string()
      .matches(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        "Expiry date must be in MM/YY format"
      )
      .required("Expiry date is required"),
    cvv: Yup.string()
      .matches(/^\d{3}$/, "CVV must be 3 digits")
      .required("CVV is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
      shippingAddress: "",
      billingAddress: "",
    },

    validationSchema,
    onSubmit: async (values) => {
      //const response = await axios.post("/api/payment", values);
      const paymentSuccessful = await simulatePayment(values);

      if (paymentSuccessful) {
        navigate("/billpay");
      } else {
        alert("Payment failed. Please try again.");
      }
    },
  });

  const [savePaymentInfo, setSavePaymentInfo] = useState(false);
  const [sameAsShipping, setSameAsShipping] = useState(false);

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
      <form onSubmit={formik.handleSubmit} style={{ flex: 1, padding: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              label="Name"
              fullWidth
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Phone"
              fullWidth
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Shipping Address"
              fullWidth
              id="shippingAddress"
              name="shippingAddress"
              value={formik.values.shippingAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.shippingAddress &&
                Boolean(formik.errors.shippingAddress)
              }
              helperText={
                formik.touched.shippingAddress && formik.errors.shippingAddress
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Billing Address"
              fullWidth
              id="billingAddress"
              name="billingAddress"
              value={formik.values.billingAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.billingAddress &&
                Boolean(formik.errors.billingAddress)
              }
              helperText={
                formik.touched.billingAddress && formik.errors.billingAddress
              }
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
        onSubmit={formik.handleSubmit}
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
              id="cardNumber"
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
              }
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Cardholder Name"
              fullWidth
              id="cardName"
              name="cardName"
              value={formik.values.cardName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.cardName && Boolean(formik.errors.cardName)}
              helperText={formik.touched.cardName && formik.errors.cardName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Expiry Date"
              fullWidth
              id="expiryDate"
              name="expiryDate"
              value={formik.values.expiryDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.expiryDate && Boolean(formik.errors.expiryDate)
              }
              helperText={formik.touched.expiryDate && formik.errors.expiryDate}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="CVV"
              fullWidth
              id="cvv"
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.cvv && Boolean(formik.errors.cvv)}
              helperText={formik.touched.cvv && formik.errors.cvv}
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

export default PaymentForms;
