import React from "react";
import { Link } from "react-router-dom";
import Viewer3D from "./Viewer3d"; // Ensure you've imported Viewer3D

import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";

function ViewOurWork() {
  const works = [
    {
      modelUrl: "/example3d.glb", // This references the model from the root
      title: "Modern Apartment",
      description: "3D visualization of a modern apartment in downtown.",
    },
    // ... Add more works as needed
  ];

  return (
    <Box component="section" sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        View Our Work
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {works.map((work, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Box sx={{ width: "100%", height: "400px", marginBottom: 2 }}>
                <Viewer3D modelUrl={work.modelUrl} />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {work.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {work.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Link to="/learnmore" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Discover More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default ViewOurWork;
