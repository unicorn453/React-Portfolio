import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AboutPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
