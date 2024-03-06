import React from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        <ProjectCard />
        <ProjectCard />
        {/* Add more ProjectCard components for each project */}
      </div>
    </section>
  );
};

export default Portfolio;
