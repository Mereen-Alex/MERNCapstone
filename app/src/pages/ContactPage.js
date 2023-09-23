import React from "react";
import { toast } from "react-toastify";
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const ContactPage = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    toast.success("Message send successfully!");
  };

  return (
    <Container margin="auto">
      <Typography variant="h4" gutterBottom marginTop={2}>
        Contact Us
      </Typography>
      <Typography paragraph>
        We would like to hear from you. Share your thoughts and queries with us.
      </Typography>
      <Paper
        elevation={3}
        style={{ padding: "20px", backgroundColor: "#ecf4f6" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Message" fullWidth multiline rows={4} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactPage;
