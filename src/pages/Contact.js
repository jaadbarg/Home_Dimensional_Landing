// Contact.js
import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function Contact() {
  return (
    <Container component="section" maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Unlock the Future of Real Estate Visualization
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
        Discover how our services can revolutionize your property listings.
      </Typography>

      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="body1" gutterBottom>
          🌟 Take bland 2D images and create beautiful lively 3D scenes.
        </Typography>
        <Typography variant="body1" gutterBottom>
          🌟 Stand out in the market with cutting-edge technology.
        </Typography>
        <Typography variant="body1" gutterBottom>
          🌟 Increase engagement and interest in your listings.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom align="center">
        Get a Quote Today!
      </Typography>
{/* //route with react and not with <form */}
      <form name="contact" method="POST" netlify>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Full Name"
          placeholder="John Doe"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Business Email"
          placeholder="john.doe@realestate.com"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Tell us about your property"
          placeholder="I have a 3-bedroom apartment in downtown..."
          multiline
          rows={5}
          margin="normal"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Request Quote
        </Button>
      </form>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Our team is ready to assist you. Reach out today!
      </Typography>
    </Container>
  );
}

export default Contact;
