import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./components/styles.css";
import Projects from "./components/Projects";
import Hero from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
