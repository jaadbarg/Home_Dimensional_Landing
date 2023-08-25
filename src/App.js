import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // This is the default Material-UI primary color. Change as needed.
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header title="NeRF Real Estate" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learnmore" element={<LearnMore />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
