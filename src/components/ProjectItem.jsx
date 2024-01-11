import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  flex-direction: ${({ isEven }) => (isEven ? 'row-reverse' : 'row')};
  height: 300px; /* Set a slightly increased fixed height */
  background-color: #f9f9f9; /* Background color */
  border-radius: 10px; /* Rounded corners */
  overflow: hidden; /* Hide overflow to maintain rounded corners */

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Change to column layout on smaller screens */
    height: auto; /* Allow height to adjust based on content */
  }
`;

const ProjectImageWrapper = styled.div`
  margin-right: 0; /* Reset margin for smaller screens */
  margin-left: 0; /* Reset margin for smaller screens */
  margin-bottom: 20px; /* Add margin between image and text on smaller screens */
`;

const ProjectImage = styled.img`
  max-width: 400px; /* Increased max-width for the image */
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  padding: 10px; /* Add padding between image and text */
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 28px; /* Increased font size for the title */
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
  font-size: 20px; /* Increased font size for the description */
`;

const ProjectButton = styled(Link)`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px; /* Adjusted padding for the button */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 18px; /* Increase font size for the button */

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectItem = ({ image, title, description, link, index }) => {
  const isEven = index % 2 === 0;

  const containerVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectContainer
      isEven={isEven}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <ProjectImageWrapper>
        <ProjectImage src={image} alt={title} />
      </ProjectImageWrapper>
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectButton to={link} whileHover={{ scale: 1.1 }}>
          View Project
        </ProjectButton>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default ProjectItem;
