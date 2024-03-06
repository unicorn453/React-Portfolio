import React from "react";
// import projectsData from "./projectsData.json";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>View Project</a>
    </div>
  );
};

export default ProjectCard;
