import React, { useContext, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, Link as MUILink } from "@mui/material";
import UserContext from "../../UserContext";
import { CartContext } from "../../CartContext";
import CartBadge from "../cart/CartBadge";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const { getCartItemsCount } = useContext(CartContext);
  const navigate = useNavigate();

  const cartItemsCount = getCartItemsCount();

  useEffect(() => {
    console.log("cartItemsCount:", cartItemsCount);
  }, [cartItemsCount]);

  const handleLogout = async () => {
    try {
      await logout(); 
      navigate("/logout");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

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

          {user ? (
             <Box display="flex" alignItems="center">
             <MUILink color="inherit" component={Link} to="/profile">
               {user.username}
             </MUILink>
             <Box display="flex" flexDirection="column" marginLeft={1}>
               <MUILink color="inherit" component={Link} to="/profile">
                 My Profile
               </MUILink>
               <MUILink color="inherit" component={Link} to="/orders">
                 My Orders
               </MUILink>
               <MUILink color="inherit" onClick={handleLogout}>Logout</MUILink>
             </Box>
           </Box>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}

          {cartItemsCount && <CartBadge cartItemsCount={cartItemsCount} />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
