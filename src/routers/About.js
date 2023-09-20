import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Allhero from '../components/Allhero'
import Aboutcontent from '../components/Aboutcontent'

const About = () => {
  return (
    <div>
       <Navbar/>
       <Allhero heading="About Me" text="Here is my information"/>
       <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default About