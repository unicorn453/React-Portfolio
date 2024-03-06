import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AboutMe />
        <Portfolio />
      </div>
    </Router>
  );
}

export default App;
