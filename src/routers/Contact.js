import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Allhero from '../components/Allhero'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Allhero heading="Contact" text="You can contact me"/>
       <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;