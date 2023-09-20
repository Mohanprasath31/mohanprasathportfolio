import "./jsprojectstyle.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import Aos from "aos";
import 'aos/dist/aos.css';
import {useEffect} from 'react'

const Jsviewcard = (props) => {
  useEffect(()=>{
    Aos.init(3000);
},[])
  return (
    <div className="view-card" data-aos="fade-right">
        <img src={props.jsimgsrc} alt="picture"/>
        <h2 className="project-name">{props.projecttitle}</h2>
        <div className="jsproject-detail">
        <div className="jspro-btn">
            <NavLink to={props.projectsrc} target="_blank" element className="btn">Play</NavLink>
        </div>
    </div>
    </div>
  )
}

export default Jsviewcard