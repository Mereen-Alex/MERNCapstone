import React, { useContext, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import CartBadge from "../cart/CartBadge";

const Navbar = () => {
  const { getCartItemsCount } = useContext(CartContext);

  const cartItemsCount = getCartItemsCount();

  useEffect(() => {
    console.log("cartItemsCount:", cartItemsCount);
  }, [cartItemsCount]);

  return (
    <div>
      <div style={{ height: "50px", background: "lightblue" }}></div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            BAKE Street
          </Typography>

          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/cakes">
            Cakes
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>

          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/logout">
            Logout
          </Button>

          {cartItemsCount && <CartBadge cartItemsCount={cartItemsCount} />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
