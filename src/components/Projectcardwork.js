import "./projectcardstyle.css";
import React from 'react'
import Projectcard from "./Projectcard";
import Projectcarddata from "./Projectcarddata";
import Aos from "aos";
import 'aos/dist/aos.css';
import {useEffect} from 'react'

const Projectcardwork = () => {
  useEffect(()=>{
    Aos.init(3000);
},[])
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {Projectcarddata.map((val,index) => {
            return(
              <Projectcard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              />
            );
          })}
        </div>
    </div>
  )
}

export default Projectcardwork;