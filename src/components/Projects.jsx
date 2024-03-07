import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectList from "./ProjectList";
import ProjectGrid from "./ProjectGrid";
import projectsData from "../data/projectsData.json";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0].id);

  return (
    <div>
      <h2 className="projects-heading">Projects</h2>
      <ProjectList projects={projectsData} />
      <ProjectGrid
        projects={projectsData}
        setActiveProject={setActiveProject}
      />
    </div>
  );
};

export default Projects;
