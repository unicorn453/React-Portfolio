import React from "react";
import "../css/Footer.css"; // Import your custom CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <a
          href="https://github.com/unicorn453"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/kirila-r"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:kira.ruseva@gmail.com" className="social-link">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
