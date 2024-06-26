import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Web Development Skills</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML</td>
            <td>Markup language for creating web pages.</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Styling language for designing the appearance of web pages.</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>
              Programming language for adding interactivity and dynamic behavior
              to web pages.
            </td>
          </tr>
          <tr>
            <td>React</td>
            <td>A JavaScript library for building user interfaces.</td>
          </tr>
          <tr>
            <td>API Integration</td>
            <td>Connecting and interacting with external services and APIs.</td>
          </tr>
          <tr>
            <td>Responsive Design</td>
            <td>Techniques for creating web pages that look good on all devices.</td>
          </tr>
          <tr>
            <td>Version Control (Git)</td>
            <td>System for tracking changes in source code during software development.</td>
          </tr>
          <tr>
            <td>Bootstrap</td>
            <td>A popular CSS framework for developing responsive and mobile-first websites.</td>
          </tr>
          <tr>
            <td>Jest</td>
            <td>A JavaScript testing framework maintained by Facebook.</td>
          </tr>
          <tr>
            <td>Styled Components</td>
            <td>A library for writing CSS in JavaScript.</td>
          </tr>
          <tr>
            <td>Firebase</td>
            <td>A platform developed by Google for creating mobile and web applications.</td>
          </tr>
          <tr>
            <td>Node.js</td>
            <td>A JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server-side.</td>
          </tr>
          <tr>
            <td>MongoDB</td>
            <td>A NoSQL database that uses JSON-like documents with optional schemas.</td>
          </tr>
          <tr>
            <td>MySQL</td>
            <td>A relational database management system based on SQL – Structured Query Language.</td>
          </tr>
          <tr>
            <td>Authentication and Authorization</td>
            <td>Implementing secure authentication and authorization mechanisms (e.g., JWT, OAuth).</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Skills;

