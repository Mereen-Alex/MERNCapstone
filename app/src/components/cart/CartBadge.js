import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartBadge = ({ cartItemsCount }) => {
 
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cartitems");
  };

  return (
    <div>
      <IconButton aria-label="cart" onClick={handleCartClick}>
        <StyledBadge badgeContent={cartItemsCount} color="secondary">
          <ShoppingCartOutlinedIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
};

export default CartBadge;
