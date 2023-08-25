import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function Success() {
  return (
    <Container
      component="section"
      maxWidth="md"
      sx={{ py: 5, textAlign: "center" }}
    >
      <Box sx={{ color: "green", fontSize: 60 }}>
        <CheckCircleOutlineIcon fontSize="inherit" />
      </Box>
      <Typography variant="h4" gutterBottom align="center" sx={{ mt: 3 }}>
        Success!
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
        Thank you for reaching out to Home Dimensional.
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        We appreciate your interest in revolutionizing the real estate
        experience with us. Our team is reviewing your message and will get back
        to you shortly. In the meantime, feel free to explore more about our
        groundbreaking services.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" href="/learnmore">
          Learn More About Our Services
        </Button>
      </Box>
    </Container>
  );
}

export default Success;
