import React from "react";
import { Container, Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 4, mt: "auto" }}>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; 2023 Home Dimensional. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
