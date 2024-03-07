import React from "react";
import projectsData from "../data/projectsData.json";

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <a href={link}>View Project</a>
    </div>
  );
};

export default ProjectCard;
