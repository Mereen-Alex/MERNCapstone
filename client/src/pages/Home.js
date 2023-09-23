import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const boxStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/cake-bg.jpeg)`,
    backgroundSize: "cover",
    textAlign: "center",
  };

  const titleStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "20px",
    borderRadius: "20px",
    color: "#f2e5d2",
    marginTop: "5vh",
  };

  const paragraphStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "30px",
    borderRadius: "40px",
    color: "#f2d5d2",
    textAlign: "left",
    marginBottom: "20vh",
    marginLeft: "3vh",
    maxWidth: "450px",
  };

  return (
    <Box sx={boxStyle}>
      <Box sx={titleStyle}>
        <Typography variant="h3" gutterBottom>
          Welcome to Bake Street!
        </Typography>
        <Typography variant="h5" gutterBottom>
          The Cake Lovers' Hub
        </Typography>
      </Box>
      <Box sx={paragraphStyle}>
        <Typography variant="body1" paragraph>
          "From intimate gatherings to grand soirées, no celebration is truly
          complete without a delightful cake! Explore our collection of
          artisanal specialty cakes and turn your celebrations into sweet,
          unforgettable memories."
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/cakes"
        >
          Explore Cakes
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
