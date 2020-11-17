import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/Logo.png";
import { HashLink } from "react-router-hash-link";
import "./NavbarAh.css";

const NavbarAh= () => {
  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/home">
            <img
              className="navbar-brand logo"
              src={logo}
              alt="apartment-hunt"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link className="nav-link mr-5" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <HashLink className="nav-link mr-5" to="/">
                About
              </HashLink>
            </Nav.Item>
            <Nav.Item>
              <HashLink className="nav-link mr-5" to="/#service">
                Service
              </HashLink>
            </Nav.Item>
            <Nav.Item>
              <HashLink className="nav-link mr-5" to="/">
                Concern
              </HashLink>
            </Nav.Item>
            <Nav.Item>
              <HashLink className="nav-link mr-5" to="/">
                Event
              </HashLink>
            </Nav.Item>
            <Nav.Item>
              <HashLink className="nav-link mr-5" to="/#footer">
                Contact Us
              </HashLink>
            </Nav.Item>
           
            <Nav.Item>
              <Link className="nav-link mr-5 text-white" to="/dashboard">
                <button className="btn btn-brand text-white">Login</button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarAh;
