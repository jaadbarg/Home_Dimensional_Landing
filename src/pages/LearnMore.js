import React from "react";
import { Container, Typography, Box } from "@mui/material";

function LearnMore() {
  return (
    <Container component="section" maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        About NeRF Technology
      </Typography>
      <Typography variant="body1" paragraph>
        Neural Radiance Fields (NeRF) is a novel technology that transforms 2D
        images into immersive 3D scenes. At NeRF Real Estate, we leverage this
        technology to provide a unique property viewing experience...
      </Typography>
      {/* You can expand on this content as needed */}
    </Container>
  );
}

export default LearnMore;
