import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';
import styled from "styled-components";
const Skills = () => {
  const skills = [
    { type: "C++", level: 85 },
    { type: "HTML", level: 80 },
    { type: "Javascript", level: 70 },
    { type: "React", level: 60 },
    { type: "My SQL", level: 60 },
    { type: "Node js", level: 50 },
    { type: "express js", level: 50 },
    { type: "Mongo DB", level: 50 },
  ];
  const Title = styled.h2`
    margin-top: 10px;
    margin-bottom: 10px;
  `;

  const Line = styled.div`
    width: 50px;
    height: 4px;
    background-color: rgb(98, 84, 243);
    margin: 0 auto 15px;
    border-radius: 30%;
  `;

  
  return (
    <div className="skills-container">
       <Title>SKILLS</Title>
      <Line />
      <div className="custom-skills">
        {skills.map((skill, index) => (
          <div className="custom-skill" key={index}>
            <div className="circular-progress">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                strokeWidth={10}
                styles={buildStyles({
                  pathTransitionDuration: 1,
                  textColor: '#333',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
            <span className="custom-skill-name">{skill.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
