import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Allhero from '../components/Allhero';
import Projectcardwork from '../components/Projectcardwork';

const Project= () => {
  return (
    <div>
      <Navbar/>
      <Allhero heading="Projects" text="This are my Project works"/>
      <Projectcardwork/>
      <Footer/>
    </div>
  )
}

export default Project;