import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
} from "@mui/material";
import Alert from "@mui/material/Alert";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertType("error");
      setAlertMessage("Please fill in all fields.");
      setOpen(true);
      return;
    }

    // The form submission is now handled by Netlify.
    // The success message will be shown after the form is successfully submitted.
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          🌟 Transform 2D images into interactive 3D scenes.
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

      <Box
        component="form"
        noValidate
        autoComplete="off"
        spacing={3}
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Full Name"
          placeholder="John Doe"
          margin="normal"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Business Email"
          placeholder="john.doe@realestate.com"
          margin="normal"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Request Quote
        </Button>
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Our team is ready to assist you. Reach out today!
      </Typography>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;
