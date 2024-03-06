import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Front-end Web Development Skills</h2>
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
          {/* Add more rows for each skill */}
        </tbody>
      </table>
    </section>
  );
};

export default Skills;
