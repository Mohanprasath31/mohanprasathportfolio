import "./reactprojectstyle.css"
import React from 'react'
import Reactviewcard from "./Reactviewcard"
import Reactprojectcarddata from "./Reactprojectcarddata";

const Javascriptprojectview = () => {
  return (
    <div className="reactview-container">
        <h1 className="reactpro-heading">REACT Project</h1>
        <div className="reactproview-container">
            {Reactprojectcarddata.map((val,index) =>{
                 return(
                    <Reactviewcard
                    key={index}
                    reactimgsrc={val.reactimgsrc}
                    reacttitle={val.reacttitle}
                    reactsrc={val.reactsrc}
                    />
                );
            })
            }
        </div>
        </div>
  )
}
export default Javascriptprojectview