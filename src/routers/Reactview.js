import Navbar from '../components/Navbar'
import React from 'react'
import Allhero from '../components/Allhero'
import Reactprojectview from '../components/Reactprojectview'
const Reactview = () => {
  return (
    <div>
        <Navbar/>
        <Allhero heading=" ReactProject View" text="This are my react Project works"/>
        <Reactprojectview/>
    </div>
  )
}

export default Reactview