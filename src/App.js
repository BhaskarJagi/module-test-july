import React from "react";
import Home from "./components/Home";
import Info from "./components/Info";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


const App = () => {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </div>
  )
}

export default App