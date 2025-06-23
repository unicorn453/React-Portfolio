import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="header-left">
        <span className="header-logo"></span>
        <span className="header-name">Kirila Ruseva</span>
      </div>
      <nav className="header-nav">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/about" className="header-link">Projects</Link>
        <Link to="/contact" className="header-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
