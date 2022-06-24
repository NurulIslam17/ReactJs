import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import MenuBar from './MenuBar';

function RouteComp() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuBar/>}/>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteComp;

