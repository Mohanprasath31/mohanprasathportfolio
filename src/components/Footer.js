import "./footerstyle.css";
import React, { useEffect } from 'react'
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";
import { hover } from "@testing-library/user-event/dist/hover";
import Aos from "aos";
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(()=>{
        Aos.init(3000);
    },[])
  return (
    <div className="footer" >
        <div className="footer-container">
            <div className="left" data-aos="fade-down">
                <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>15/23 D2 kalavasal street</p>
                    <p>Cumbum,Tamilnadu</p>
                </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>6383778265</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>bkmprasath@gmail.com</h4>
                </div>
            </div>
            <div className="right" data-aos="fade-down">
                <h4>About my social media</h4>
                <p>this are my social meadia details</p>
                <div className="socialmedia">
            <a href="https://www.instagram.com/invites/contact/?!=1uuzuroswctzr&utm_content=8c5cfyl" target="_blank"><FaInstagram size={30} style={{marginRight:"1rem"}} /></a>
            <a href="https://www.github.com/Mohanprasath31" target="_blank"><FaGithub size={30} style={{marginRight:"1rem"}}  /></a>
            <a href="https://www.linkedin.com/in/mohan-prasath-84048b261" target="_blank"><FaLinkedin size={30} style={{marginRight:"1rem"}}  /></a>

                </div>
                </div>
            </div>
        </div>
  )
}

export default Footer