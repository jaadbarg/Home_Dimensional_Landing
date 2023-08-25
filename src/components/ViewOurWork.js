import React from "react";
import { Link } from "react-router-dom";
import Viewer3D from "./Viewer3d";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function ViewOurWork() {
  const works = [
    {
      modelUrl: "/example3d.glb",
      title: "Modern Apartment",
      description: "3D visualization of a modern apartment in downtown.",
    },
    // ... Add more works as needed
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="section" sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom color="white">
        View Our Work
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {works.map((work, index) => (
          <Grid item xs={12} sm={8} md={6} key={index}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  paddingBottom: "56.25%",
                }}
              >
                <Viewer3D modelUrl={work.modelUrl} />
              </Box>
              <CardContent sx={{ padding: 2 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontSize: isMobile ? "1rem" : "1.2rem" }}
                >
                  {work.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontSize: isMobile ? "0.8rem" : "1rem" }}
                >
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
