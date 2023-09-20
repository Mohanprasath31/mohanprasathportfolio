import { Link } from "react-router-dom";
import "./aboutcontentstyle.css";
import React from 'react'
import port from "../Images/react portfolio.png";
import weather from "../Images/weather.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Aboutcontent = () => {
    useEffect(()=>{
        Aos.init(3000);
    },[])
  return (
    <div className="about">
        <div className="left" data-aos="fade-right">
            <h1>WHO AM I</h1>
            <p>I'M Mohan Prasath ,a fresher i finished my Bachelor of computer science engineering and currently searching for job</p>
            <Link to= "/contact" className="btn">Contact</Link>
        </div>
        <div className="right" data-aos="fade-down">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={weather} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={port} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent;