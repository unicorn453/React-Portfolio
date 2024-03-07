import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData.json";

const ProjectList = ({ projects, setActiveProject }) => {
  const handleClick = (projectId) => {
    setActiveProject(projectId);
  };

  return (
    <div id="projectCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            onClick={() => handleClick(project.id)}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              github={project.github}
              image={project.image}
              onClick={() => handleClick(project.id)} // Pass handleClick to ProjectCard
            />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#projectCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#projectCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ProjectList;
