import React from "react";
import { Typography, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  margin: "auto",
  maxWidth: 600,
  backgroundColor: "#ecf4f6", 
  maxHeight: "100vh",
  lineHeight: "1.5"
  
}));

const AboutUs = () => {
  return (
    <Container>
      <StyledPaper elevation={3}>
        <Typography variant="h3" gutterBottom textAlign= "center">
          About Bake Street
        </Typography>
        <Typography variant="h5" gutterBottom>
          The Cake Lovers' Hub
        </Typography>
        <Typography paragraph>
          Step into the Sweet Haven that is Bake Street! We are more than just a
          bakery; we are a passion-driven destination where every cake is a
          masterpiece. Since our inception in January 2023, Bake Street has been
          synonymous with unparalleled taste and artistry in the world of
          confections.
        </Typography>
        <Typography paragraph>
          Our mission is simple yet profound: to spread joy, love, and happiness
          through the sweet art of baking. We believe that every slice of cake
          is a slice of happiness, and we take pride in being a part of your
          most cherished moments. Whether it's a birthday, anniversary, or just
          a sweet craving, we're here to make every occasion a little sweeter.
        </Typography>
      </StyledPaper>
    </Container>
  );
};

export default AboutUs;
