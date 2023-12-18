import React from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import { MdContactPhone } from 'react-icons/md';
import './Navigations.css';

export default function Navigation() {
  

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <div className="nav">
            <NavLink eventKey="1" as={Link} to="/" className="navabout">
              <div className="title-container">
                <h1 className="title">
                  <b>Bhargavi</b>
                  <span className="lastname">Kanugula</span>
                </h1>
              </div>
            </NavLink>
            <NavLink eventKey="1" as={Link} to="/skills" className="navabout">
              Skills
            </NavLink>
            <NavLink eventKey="2" as={Link} to="/projects" className="navtext">
              Projects
            </NavLink>
            <NavLink eventKey="3" as={Link} to="/certifications" className="navtext">
              Certifications
            </NavLink>
            <NavLink eventKey="4" as={Link} to="/achievements" className="navtext">
                Internships & Achievements
            </NavLink>

            <NavLink eventKey="5" href="https://github.com/kbhargavi333" target="_blank"  className="navtext">
              <FaGithub className="icon" />&nbsp;
            </NavLink>
            <NavLink eventKey="6" href="https://www.linkedin.com/in/bhargavi-kanugula-b0590322a/" target="_blank" className="navtext">
              <IoLogoLinkedin className="icon" />&nbsp;
            </NavLink>
            <NavLink eventKey="7" as={Link} to="/contact" className="navtext">
              <MdContactPhone className="icon" />&nbsp;
            </NavLink>
            
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
