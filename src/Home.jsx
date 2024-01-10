import React from 'react'
import Intro from './components/Intro'
import Contact from './Contact'
const Home = () => {
  const data={
    text: "Hello Everyone",
    image: "./images/myimager.png",
    imageSize:"150%",
    detail:"4th Year Engineering Student at GEU, Dehradun",
    link:"/contact",
    linkName:"Contact Me"
  };
  return (
    <>
    <Intro {...data}/>
    <Contact/>
    </>
  )
}

export default Home