import React from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";

function Contact() {
  return (
    <Container component="section" maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" noValidate autoComplete="off" spacing={3}>
        <TextField
          fullWidth
          id="name"
          label="Name"
          placeholder="Enter your name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          placeholder="Enter your email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="message"
          label="Message"
          placeholder="Your message..."
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
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
