import React from "react";
import headshot from "public/assets/portfolio4.png";

const Hero = () => {
  return (
    <section id="portfolio-header">
      <div className="profile-info">
        <img src={headshot} alt="Kirila Ruseva" className="avatar" />
        <div className="text-info">
          <h1>Kirila Ruseva</h1>
          <p>
            Empowering businesses and individuals alike with bespoke digital
            solutions, I blend creativity with technical prowess to craft
            immersive online experiences that captivate, engage, and drive
            results. With a passion for innovation and a commitment to
            excellence, I am dedicated to shaping the digital world, one pixel
            at a time.
          </p>
          <p>
            Portfolio:{" "}
            <a
              href="https://docs.google.com/document/d/1G8IO7Yobsy4sQp5bVngVavKi0QQ6ZA1lIQ0TZ6V9ozk/edit?usp=sharing"
              target="_blank"
            >
              View Portfolio
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
