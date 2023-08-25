import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Header({ title }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <img
            src="/nerf3d.png"
            alt="NeRF Logo"
            style={{ width: "50px", marginRight: "15px" }}
          />

          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
