import React from "react";
import Login from "../components/auth/Login";
import { Typography, Box } from "@mui/material";

const LoginPage = () => {
  const boxStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Login-bg.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "30px",
  };

  const subTitleStyle = {
    padding: "20px",
    borderRadius: "20px",
    textAlign: "center",
    maxWidth: "600px",
    marginBottom: "auto", 
  };

  const loginWrapperStyle = {
    flex: 1, 
    display: "flex",
    
  };

  return (
    <Box sx={boxStyle}>
      <Box sx={subTitleStyle}>
        <Typography variant="h5" gutterBottom color="text.secondary">
          Welcome back! Please Sign in
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
          Delicious cakes await you!
        </Typography>
      </Box>
      <Box sx={loginWrapperStyle}>
        <Login />
      </Box>
    </Box>
  );
};

export default LoginPage;
