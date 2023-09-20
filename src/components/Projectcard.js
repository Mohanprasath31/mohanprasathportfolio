import "./projectcardstyle.css";
import React from 'react'
import { NavLink} from "react-router-dom";

const Projectcard = (props) => {
  return (
    <div className="project-card"data-aos="fade-right">
    <img src={props.imgsrc} alt= "image"/> 
    <h2 className="project-title">{props.title}</h2>
    <div className="project-detail">
        <p>{props.text}</p>
        <div className="pro-btn">
            <NavLink to={props.view} element className="btn">View</NavLink>
            <NavLink to="url.com" className="btn">Source</NavLink>
        </div>
    </div>
         </div>
  )
}

export default Projectcard