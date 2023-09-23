import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} BAKE Street
          </Typography>
          <Typography
            variant="body2"
            color="inherit"
            style={{ marginLeft: "10px" }}
          >
            Created with love by Mereen
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Footer;
