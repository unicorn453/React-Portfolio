import React, { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);
  const toggleMenu = () => {
    setShowCollapsedMenu(!showCollapsedMenu);
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Kirila Ruseva
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            "collapse navbar-collapse justify-content-end" +
            (showCollapsedMenu ? " show" : "")
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
