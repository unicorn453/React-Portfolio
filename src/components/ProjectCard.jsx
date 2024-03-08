import React from "react";

const ProjectCard = ({ title, description, link, image, onClick, github }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={image} alt={title} onClick={handleClick} />
      <p>{description}</p>
      <div>
        <a href={link} target="_blank">
          View Project
        </a>
      </div>
      <div>
        <a href={github} target="_blank">
          GitHub repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
