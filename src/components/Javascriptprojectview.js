import "./jsprojectstyle.css"
import React from 'react'
import Jsviewcard from "./Jsviewcard"
import Jsprojectdata from "./Jsprojectdata";

const Javascriptprojectview = () => {
  return (
    <div className="view-container">
        <h1 className="jspro-heading">Html,Css,Javascript Project</h1>
        <div className="proview-container">
            {Jsprojectdata.map((val,index) =>{
                 return(
                    <Jsviewcard
                    key={index}
                    jsimgsrc={val.jsimgsrc}
                    projecttitle={val.projecttitle}
                    projectsrc={val.projectsrc}
                    />
                );
            })
            }
        </div>
        </div>
  )
}
export default Javascriptprojectview