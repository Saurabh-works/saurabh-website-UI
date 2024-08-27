import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Login from '../Components/Login';
import Projects from '../Components/Projects';
import Services from '../Components/Services';
import Update from '../Components/Update';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProjectForm from '../Components/ProjectForm';
import ContactData from '../Components/ContactData';
import ProjectTable from '../Components/ProjectTable';

const Nav_Routing = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}>
                        <Route path="skills" element={<Skills />} />
                        <Route path="experience" element={<Experience />} />
                        <Route path="education" element={<Education />} />
                    </Route>
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/projectform" element={<ProjectForm />} />
                    <Route path="/ContactData" element={<ContactData />} />
                    <Route path="/ProjectTable" element={<ProjectTable/>} />

                </Routes>
            </Router>
            <Footer />
        </>
    );
};

export default Nav_Routing;
