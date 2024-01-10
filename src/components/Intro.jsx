import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import Typewriter from 'typewriter-effect';

const Intro = (props) => {
  const { imageSize = '70%', bgColor = '' } = props;

  return (
    <Wrapper>
      <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
          <p className='hero-top-data'>{props.text}</p>
          <h1 className='hero-heading'>Paksh Gupta</h1>
          <p className='hero-para'>
            {props. detail}{' '}
            
          </p>
          <Button className='btn hireme-btn'>
            <NavLink to={props.link}>{props.linkName}</NavLink>
          </Button>
        </div>
        <div className='section-hero-image'>
          <picture>
            <img
              src={props.image}
              alt='image'
              className='hero-img'
              style={{ maxWidth: imageSize, backgroundColor: bgColor }}
            />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0; /* Adjusted padding for better spacing */

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem; /* Added padding for better alignment */
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align text */
    text-align: center; /* Center align text */
  }

  .btn {
    max-width: 16rem;
    margin-top: 2rem; /* Added space between text and button */
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.3rem; /* Slightly reduced font size */
    color: ${({ theme }) => theme.colors.secondary}; /* Changed color */
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4.8rem; /* Reduced font size */
    margin-top: 1rem; /* Adjusted margin for better spacing */
    color: ${({ theme }) => theme.colors.primary}; /* Changed color */
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3rem; /* Adjusted margin for better spacing */
    font-size: 1.6rem; /* Adjusted font size */
    color: ${({ theme }) => theme.colors.tertiary}; /* Changed color */
  }

  .hero-sp {
    font-size: inherit;
    color: ${({ theme }) => theme.colors.secondary}; /* Changed color */
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-img {
    max-width: 100%; /* Adjusted image width */
    height: auto;
    border-radius: 10px; /* Added border-radius for a rounded image */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added a subtle shadow */
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 3rem; /* Reduced gap for smaller screens */
    }

    .hero-heading {
      font-size: 3.6rem; /* Adjusted font size for smaller screens */
    }

    .hero-para {
      font-size: 1.4rem; /* Adjusted font size for smaller screens */
    }
  }
`;


export default Intro;
