import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Features from "./Features";

function Home() {
  return (
    <Box
      sx={{
        py: 5,
        backgroundImage: `url('https://source.unsplash.com/720x600?real-estate')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black
          padding: 2,
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom color="white">
          Home Dimensional
        </Typography>
        <Typography variant="h5" gutterBottom color="white">
          Transforming 2D images into 3D spaces
        </Typography>
        <Typography variant="body1" paragraph color="white">
          Experience and share your property in a brand new way utilizing
          cutting edge A.I. shaders technology to create high quality 3d rendered scenes out of photos of your
          property.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="contained" color="primary" href="/learnmore">
            Learn More
          </Button>
          <Button variant="outlined" color="primary" href="/contact">
            Contact Us
          </Button>
        </Box>
      </Box>
      <Features />
    </Box>
  );
}

export default Home;
