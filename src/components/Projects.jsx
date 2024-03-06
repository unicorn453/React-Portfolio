import React from "react";
import ProjectList from "./ProjectList";
import projectsData from "./data/projectsData.json";

const Projects = () => {
  return (
    <div>
      <h2 className="projects-heading">Projects</h2>
      <ProjectList projects={projectsData} />
    </div>
  );
};

export default Projects;
