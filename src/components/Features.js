import React from "react";
import { Box, Typography, Grid, Divider, Container } from "@mui/material";

function Features() {
  return (
    <Box
      component="section"
      sx={{
        mt: 4, // Add top margin for spacing
        py: 5,
        backgroundColor: "rgba(0, 0, 0, 0.7)", // slightly darker background
        color: "white",
        borderRadius: 1,
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Our Features
        </Typography>
        <Divider sx={{ my: 2, backgroundColor: "white" }} />{" "}
        {/* Divider for distinction */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {" "}
          {/* Added margin-top here */}
          <Grid item xs={12} md={4} sx={{ p: 2 }}>
            {" "}
            {/* Added padding here */}
            <Typography variant="h6" gutterBottom sx={{ pl: 2 }}>
              3D Scene Creation
            </Typography>
            <Typography sx={{ pl: 2 }}>
              Turn 2D photos into immersive 3D scenes.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ p: 2 }}>
            {" "}
            {/* Added padding here */}
            <Typography variant="h6" gutterBottom sx={{ pl: 2 }}>
              Easy Integration
            </Typography>
            <Typography sx={{ pl: 2 }}>
              Easily integrate our 3D scenes into your listings.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ p: 2 }}>
            {" "}
            {/* Added padding here */}
            <Typography variant="h6" gutterBottom sx={{ pl: 2 }}>
              Affordable Pricing
            </Typography>
            <Typography sx={{ pl: 2 }}>
              Get the best value for your money.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;
