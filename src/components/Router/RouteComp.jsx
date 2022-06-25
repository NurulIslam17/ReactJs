import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import MenuBar from "./MenuBar";
import NoPage from "./NoFound";

function RouteComp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MenuBar />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default RouteComp;
