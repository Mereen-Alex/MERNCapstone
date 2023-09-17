import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axiosConfig";
import { useCookies } from "react-cookie";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["jwt"]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/logout");

      localStorage.removeItem("user");
      removeCookie("jwt");

      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <Typography variant="h4" gutterBottom>
        Thank You for Visiting Us!
      </Typography>
      <Typography variant="body1" paragraph>
        You have been successfully logged out.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogout}
        size="large"
      >
        Login
      </Button>
      <Typography variant="body2" style={{ marginTop: "1rem" }}>
        Continue shopping{" "}
        <Button color="primary" component="a" href="/cakes">
          here
        </Button>
      </Typography>
    </Box>
  );
};

export default Logout;
