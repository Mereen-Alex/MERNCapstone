import React from "react";
import Register from "../components/auth/Register";
import { Typography, Box } from "@mui/material";

const RegisterPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "flex-start",
        height: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Login-bg.jpg)`,
        backgroundSize: "cover",
        padding: "40px",
      }}
    >
      <Typography variant="h5" gutterBottom color="text.secondary">
        Welcome to our cake ordering platform!
      </Typography>
      <Typography
        variant="body1"
        sx={{ margin: "1rem 0", color: "text.secondary", fontStyle: "italic" }}
      >
        Join us to satisfy your sweet cravings!
      </Typography>

      <Register />
    </Box>
  );
};

export default RegisterPage;
