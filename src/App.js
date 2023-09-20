import Home from "./routers/Home";
import About from "./routers/About";
import Project from "./routers/Project";
import Contact from "./routers/Contact";
import View from "./routers/View";
import Reactview from "./routers/Reactview";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/project" element={<Project/>}/>
  <Route path="/View" element={<View/>}/>
  <Route path="/reactview" element={<Reactview/>}/>
 </Routes></>
  );
}

export default App;
