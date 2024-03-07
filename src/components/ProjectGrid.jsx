import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData.json";

const ProjectGrid = ({ projects, setActiveProject }) => {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-grid-item"
          onClick={() => setActiveProject(project.id)}
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
