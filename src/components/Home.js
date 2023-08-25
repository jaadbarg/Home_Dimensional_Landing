import React from "react";
import { Button } from "@mui/material";

function Home() {
  return (
    <div>
      <section className="hero-section">
        <h1>NeRF Real Estate</h1>
        <h2>Transforming 2D into 3D</h2>
        <p>
          Experience properties in a unique and engaging way with our NeRF AI
          technology.
        </p>
        <Button variant="contained" color="primary" href="/learnmore">
          Learn More
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="/contact"
          style={{ marginLeft: "10px" }}
        >
          Contact Us
        </Button>
      </section>
      {/* Add other sections of the homepage here */}
    </div>
  );
}

export default Home;
