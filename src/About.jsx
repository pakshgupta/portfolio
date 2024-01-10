import React from "react";
import Intro from "./components/Intro";
import styled from "styled-components";
import Skills from "./components/Skills";

const About = () => {
  const data = {
    text: "Get to know me!",
    image: "./images/myimage2.png",
    detail:
      "I'm a web developer passionate about bringing ideas to life through coding, creating diverse and exciting projects. Off the screen, I'm an avid badminton player, relishing the thrill of the game with each swing. Additionally, I find joy in the strategic depth of chess, always eager for the challenge of outmaneuvering opponents on the board. ",
    link: "https://drive.google.com/file/d/1CxmR6WqrF7PRbF5PNAZQj9eMsuaLFxhR/view?usp=sharing",
    linkName: "Resume",
  };
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
  return (
    <>
      <Title>ABOUT ME</Title>
      <Line />
      <Description>Here you will find more information about me</Description>
      <Intro {...data} />

      <Skills />
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
`;

const Content = styled.div`
  max-width: 60rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

export default About;
