import "./reactprojectstyle.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import Aos from "aos";
import 'aos/dist/aos.css';
import {useEffect} from 'react'
const Reactviewcard = (props) => {
  useEffect(()=>{
    Aos.init(3000);
},[])
  return (
    <div className="reactview-card" data-aos="fade-right">
        <img src={props.reactimgsrc} alt="picture"/>
        <h2 className="reactproject-name">{props.reacttitle}</h2>
        <div className="reactproject-detail">
        <div className="reactpro-btn">
            <NavLink to={props.reactsrc} target="_blank" element className="btn">Play</NavLink>
        </div>
    </div>
    </div>
  )
}

export default Reactviewcard