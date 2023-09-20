import "./allherostyle.css";
import React, { Component } from 'react'

class Allhero extends Component {
  render(){
  return (
    <div className="projecthero">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}

export default Allhero