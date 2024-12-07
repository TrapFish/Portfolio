import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "../pages/Skills";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Project from '../pages/Project';
import NoPage from "../pages/NoPage";
import Navigation from "./Navigation";

function Navbar() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Navigation />
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="project" element={<Project />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Navbar;