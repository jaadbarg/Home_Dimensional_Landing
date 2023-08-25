import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Features from "./Features";
import ViewOurWork from "./ViewOurWork";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: isMobile ? 3 : 5,
        position: "relative",
        overflow: "hidden",
        minHeight: isMobile ? "auto" : "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline // Added this attribute
        playbackRate={0.33}
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source
          src="https://cdn-luma.com/public/lumalabs.ai/flythroughs/14-aug/new%20hero.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag. // Fallback message
      </video>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black
          padding: isMobile ? 1 : 2,
          borderRadius: 1,
          textAlign: "center",
          maxWidth: "90%",
        }}
      >
        <Typography variant={isMobile ? "h4" : "h3"} gutterBottom color="white">
          Home Dimensional
        </Typography>
        <Typography variant={isMobile ? "h6" : "h5"} gutterBottom color="white">
          Transforming 2D images into 3D spaces
        </Typography>
        <Typography variant="body1" paragraph color="white">
          Experience and share your property in a brand new way utilizing
          cutting edge A.I. shaders technology to create high quality 3d
          rendered scenes out of photos of your property.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            href="/learnmore"
            sx={{ mb: isMobile ? 1 : 0 }}
          >
            Learn More
          </Button>
          <Button variant="outlined" color="primary" href="/contact">
            Contact Us
          </Button>
        </Box>
      </Box>
      <Features />
      <ViewOurWork />
    </Box>
  );
}

export default Home;
