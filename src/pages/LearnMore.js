import React from "react";
import { Container, Typography } from "@mui/material";
import { CardMedia } from "@mui/material";

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
      <CardMedia
        component="img"
        height="240"
        image="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000&t=st=1692929277~exp=1692929877~hmac=da6b434fbf13d8d294f1a19212101272f7ae11700501915f783c97a7aecfeb5d"
        alt="NeRF Technology"
      />
      {/* You can expand on this content as needed */}
    </Container>
  );
}

export default LearnMore;
// https://source.unsplash.com/720x400?technology