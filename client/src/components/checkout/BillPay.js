import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const BillPay = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h4">Bill Paid</Typography>
        <Typography variant="body1">Payment done successfully.</Typography>
        <Typography variant="body1">Thank you for shopping!</Typography>
      </Paper>
    </Container>
  );
};

export default BillPay;
