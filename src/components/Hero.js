import React from 'react'
import"./herostyle.css"
import { Link } from 'react-router-dom';
import Bgimg  from "../Images/img1.jpg";
const Hero = () => {
return (
    <div className='hero'>
        <div className='mask'>
          <img className='into-img' src ={ Bgimg } alt='introimg'/>
        </div>
        <div className='content'>
            <p>Hi, I'M </p>
            <h1>Mohan Prasath</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}
export default Hero;