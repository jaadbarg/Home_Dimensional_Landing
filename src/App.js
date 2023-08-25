import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";
import Home from "./components/Home";
import Success from "./pages/Success"; // Make sure to import the Success component

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header title="4Dome Real Estate Imaging" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/success" element={<Success />} />{" "}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
