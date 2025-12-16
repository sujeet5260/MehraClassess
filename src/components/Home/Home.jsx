import React from 'react'
import HeroSection from '../Hero-section'
import About from "../About"
import Skill from "../Skill"
import Courses from "../Courses"
import Contact from "../Contact"
import Testimonials from "../Testimonials"



const Home = () => {
  return (
    <div>
      <HeroSection/>  
      <Skill/>  
      <Courses/>
      <Testimonials/>
       <About/> 
       <Contact/>
       {/* The hero, skill, Courses, Contact and about section is compketed */}
      
    </div>
  )
}

export default Home
