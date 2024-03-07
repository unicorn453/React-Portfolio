import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData.json";

const ProjectGrid = ({ projects, setActiveProject }) => {
  const handleClick = (projectId) => {
    setActiveProject(projectId);
  };

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-grid-item"
          onClick={() => handleClick(project.id)}
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
            github={project.github}
            image={project.image}
            onClick={() => handleClick(project.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
