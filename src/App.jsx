import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <AboutMe />
        <Portfolio />
        <Skills />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
