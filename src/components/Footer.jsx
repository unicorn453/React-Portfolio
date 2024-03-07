import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="contact-info">
        <a
          href="https://github.com/unicorn453"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/kirila-r"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:kira.ruseva@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
