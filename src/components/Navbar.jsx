


import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4.8rem;

    .navbar-list {
      display: flex;
      gap: 4.8rem;
      list-style: none;
      margin-left: auto; /* Move all items to the right */

      li {
        .navbar-link {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .hamburger-icon {
      display: ${isMobile ? 'block' : 'none'};
      font-size: 2rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.black};

      @media (min-width: 769px) {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .navbar-list {
        display: ${isMobile ? (showMenu ? 'flex' : 'none') : 'flex'};
        flex-direction: column;
        align-items: flex-end; /* Align items to the right */
        width: 100%;
        position: absolute;
        top: 60px; /* Adjust as needed based on your header height */
        right: 0;
        background-color: ${({ theme }) => theme.colors.bg};
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 1;
      }

      .hamburger-icon {
        display: ${showMenu ? 'none' : 'block'};
      }
    }
  `;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
const hanburger=()=>{
   
    setShowMenu(false);
}
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setShowMenu(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Nav>
      <div className='menuicon'>
        {isMobile && !showMenu ? (
          <GiHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />
        ) : (
          <ul className="navbar-list">
            <li>
              <NavLink className="navbar-link" to="/" onClick={() => hanburger()}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/about" onClick={() => hanburger() }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/work" onClick={() => hanburger()}>
                Work
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/contact" onClick={() => hanburger()}>
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;