import React from "react";
import styled from "styled-components";
import ProjectItem from "./components/ProjectItem";
import { Link } from "react-router-dom";

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

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

const Description = styled.p`
  text-align: center;
`;

const MoreProjectsLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #6254f3;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid #6254f3;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 18px; /* Increase font size */

  &:hover {
    background-color: #6254f3;
    color: white;
  }
`;

// Media query for smaller screens
const ProjectsContainerResponsive = styled(ProjectsContainer)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      image: "./images/weatherapp.png",
      description:
        "Proficiently developed a dynamic weather application using React.js, integrating the OpenWeatherMap API to fetch real-time weather data. Implemented an intuitive user interface that displays accurate weather information, showcasing adept utilization of React.js components and API integration.",
        link:"https://github.com/pakshgupta/React-Weather-App"
    },
    {
      id: 2,
      title: "Travel Advisor",
      image: "./images/travel.png",
      description:
      "Engineered a comprehensive travel advisory application in React, leveraging Google Maps API and Travel Advisor API from Rapid API. Seamlessly integrated functionalities to display diverse restaurants, hotels, and attractions, complemented by a user-friendly interface. Implemented a sophisticated rating filter feature to enhance user experience, showcasing adept utilization of React components and API integration",
      link:"https://github.com/pakshgupta/Travel"
    },
    {
      id: 3,
      title: "Veggie Bazar",
      image: "./images/veg.png",
      description:
        "Developed a full-stack vegetable marketplace, 'Veggie Bazar,' with a React-based front end and an Express.js backend coupled with MongoDB for database management. Implemented secure payment processing using Stripe, ensuring seamless and safe transactions. Leveraged Crypto.js and JWTwebtoken for robust password authentication and authorization, fortifying user data integrity.",
        link:"https://github.com/pakshgupta/veggie-website"
    },
    {
      id: 3,
      title: "Explore Epic",
      image: "./images/exploreepic.png",
      description:
        "Developed a full-stack Blogging Websote, 'Explore Epic,'  for users to write and share travel stories, prioritizing ease of use and engaging user experience.Integrated MongoDB as the database solution for efficient data storage and retrieval, leveraged Express.js to develop robust APIs for handling CRUD operations.",
        link:"https://github.com/pakshgupta/Blogging-Website"
    },
    // Add more projects as needed
  ];

  return (
    <>
      <Title>PROJECTS</Title>
      <Line />
      <Description>
        Here you'll find some of the personal projects I've worked on, each with its own case study.
      </Description>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            index={index + 1}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </ProjectsContainer>
      <MoreProjectsLink to='https://github.com/pakshgupta' target="_blank">
        More Projects
      </MoreProjectsLink>
    </>
  );
};

export default Projects;
