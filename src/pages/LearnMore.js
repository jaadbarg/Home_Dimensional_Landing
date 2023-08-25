import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom"; // <-- Import the Link component

function LearnMore() {
  return (
    <Container component="section" maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Revolutionizing Real Estate Visualization with AI
      </Typography>
      <Typography variant="body1" paragraph>
        In an era where technology is reshaping industries, we stand at the
        forefront of a paradigm shift in real estate visualization. Just as the
        Polaroid camera once transformed the realm of 2D imaging, our
        cutting-edge AI Neural Radiance technology is poised to redefine the
        landscape of 3D scene reconstruction.
      </Typography>
      <CardMedia
        component="img"
        height="240"
        image="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000&t=st=1692929277~exp=1692929877~hmac=da6b434fbf13d8d294f1a19212101272f7ae11700501915f783c97a7aecfeb5d"
        alt="NeRF Technology"
      />
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Why Choose Our Services?
      </Typography>
      <Grid container spacing={3}>
        {[
          [
            "Innovative Technology",
            "Harnessing the power of groundbreaking advancements in AI, we offer an unparalleled property visualization experience. Our approach isn't just about creating images; it's about crafting immersive environments that captivate and engage.",
          ],
          [
            "Seamless Process",
            "Our method is straightforward. We caputre footage of your property's interior, and let our advanced systems handle the rest. With access to the world's leading NeRF and meshing models, our AI processes the footage to produce a detailed and interactive 3D scene.",
          ],
          [
            "Versatile Outputs",
            "Whether you're looking for an interactive 3D scene that can be embedded directly into a platform or a pre-rendered 360-degree image or video, we've got you covered. Our outputs are designed to cater to a diverse range of needs, ensuring that you always have the perfect visualization tool at your disposal.",
          ],
          [
            "Competitive Edge",
            "In the competitive world of real estate, having a unique selling proposition can make all the difference. By offering potential buyers or renters a chance to explore properties in 3D, you're not just showing them a space; you're giving them an experience.",
          ],
        ].map(([title, description]) => (
          <Grid item xs={12} md={6} key={title}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2">{description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Elevate Your Property Listings
      </Typography>
      <Typography variant="body1" paragraph>
        Don't let your properties get lost in the crowd. Elevate your listings
        with our 3D visualization services and offer potential clients an
        experience they won't forget. In a digital age, it's not just about the
        property; it's about the presentation and the buzz. Let us help you make
        a lasting impression.
      </Typography>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        {" "}
        <Button variant="contained" color="primary" size="large">
          Contact Us
        </Button>
      </Link>
    </Container>
  );
}

export default LearnMore;
