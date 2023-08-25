import React from "react";
import { Box, Typography, Button } from "@mui/material";

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
      <Typography variant="h3" gutterBottom color="white">
        NeRF Real Estate
      </Typography>
      <Typography variant="h5" gutterBottom color="white">
        Transforming 2D into 3D
      </Typography>
      <Typography variant="body1" paragraph color="white">
        Experience and share your properties in brand new way utilizing
        absolutley cutting edge AI technology to create 3d space before your
        eyes
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="/learnmore"
        sx={{ mr: 2 }}
      >
        Learn More
      </Button>
      <Button variant="outlined" color="primary" href="/contact">
        Contact Us
      </Button>
    </Box>
  );
}

export default Home;
