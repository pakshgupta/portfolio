import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

 
  return (
      <MainHeader>
        <NavLink to="/">
            <img src="./images/logo.png" alt="logo" className='logo'/>
        </NavLink>
      
        <Navbar/>
       
        </MainHeader>
  )
}
const MainHeader=styled.header`
padding:0 4.8rem;
height: 10rem ;
background-color: ${({theme})=>theme.colors.bg};
display:flex;
align-items:center;
justify-content:space-between;
.logo{
  max-width:30%;
  height: auto;
}
`;

export default Header