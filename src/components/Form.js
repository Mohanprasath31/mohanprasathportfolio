import "./formstyle.css"
import React, { useState } from 'react'

const Form = () => {
  const [formdata,setformdata]=useState({
    name:'',
    email:'',
    subject:'',
    body:''
  });
  const handledata =(e) => {
    const {name,value}= e.target;
    setformdata({
      ...formdata,
      [name]: value
    });
  }
  const handlesubmit =(e) => {
    e.preventDefault();
    const {name,email,subject,body} =formdata;
    const mailtoUrl =`mailto:${email}?subject=Message from ${name} ${subject}&body=${body}`;
    window.location.href =mailtoUrl;
  }
  return (
    <div className="form">
        <form onSubmit={handlesubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" value={formdata.name} onChange={handledata} placeholder="Enter your name"></input>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formdata.email} onChange={handledata} placeholder="Email For bkmprasath@gmail.com"></input>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formdata.subject} onChange={handledata} placeholder="Subject"></input>
            <label htmlFor="body">Meassage</label>
            <textarea id="body" name="body" value={formdata.body} onChange={handledata} rows="6" placeholder="type a message"/>
            <button className="btn" data-aos="fade-down" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form