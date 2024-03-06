import React from "react";
import headshot from "./assets/portfolio4.png";

const Hero = () => {
  return (
    <section id="portfolio-header">
      <div className="profile-info">
        <img src={headshot} alt="Your Name" className="avatar" />
        <div className="text-info">
          <h1>Kirila Ruseva</h1>
          <p>Your Brand Statement</p>
          <p>Portfolio</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
