import React from "react";
import "./styles.css";
import ProjectCard from "./ProjectCard";
import projectsData from "./data/projectsData.json";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id} // Ensure each card has a unique key
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
