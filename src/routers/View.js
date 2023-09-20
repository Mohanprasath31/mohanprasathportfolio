import Navbar from '../components/Navbar'
import React from 'react'
import Allhero from '../components/Allhero'
import Javascriptprojectview from '../components/Javascriptprojectview';
const View = () => {
  return (
    <div>
        <Navbar/>
        <Allhero heading="Project View" text="This are my Html,css,Javascript Project works"/>
        <Javascriptprojectview/>
    </div>
  )
}

export default View