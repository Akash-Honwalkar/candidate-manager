
import React from 'react';

const Skills = ({ candidate }) => {
    const skills=candidate.skills
    console.log(skills)
  return (
    <div>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
