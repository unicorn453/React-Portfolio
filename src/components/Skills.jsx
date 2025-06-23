import React from "react";

const skills = [
  { name: "HTML & CSS", desc: "Markup and styling languages for creating and designing web pages." },
  { name: "JavaScript", desc: "Programming language for interactivity and dynamic behavior." },
  { name: "React", desc: "A JavaScript library for building user interfaces." },
  { name: "Node.js", desc: "JavaScript runtime for server-side development." },
  { name: "API Integration", desc: "Connecting and interacting with external services and APIs." },
  { name: "Responsive Design", desc: "Techniques for creating web pages that look good on all devices." },
  { name: "Version Control (Git)", desc: "System for tracking changes in source code." },
  { name: "Bootstrap", desc: "A popular CSS framework for responsive websites." },
  { name: "Jest", desc: "A JavaScript testing framework." },
  { name: "Styled Components", desc: "A library for writing CSS in JavaScript." },
  { name: "Firebase", desc: "A platform for creating mobile and web applications." },
  { name: "MongoDB", desc: "A NoSQL database using JSON-like documents." },
  { name: "MySQL", desc: "A relational database management system." },
  { name: "Authentication & Authorization", desc: "Implementing secure authentication and authorization mechanisms." },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-title">Skills</div>
      <div className="skills-row">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-desc">{skill.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

