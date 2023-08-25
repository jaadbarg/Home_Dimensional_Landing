import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Header({ title }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/nerf3dcrop.png"
              alt="4Dome Logo"
              style={{ width: "50px", marginRight: "15px" }}
            />
            <Typography variant="h6">{title}</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
