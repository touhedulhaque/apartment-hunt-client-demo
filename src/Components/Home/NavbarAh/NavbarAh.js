import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/Logo.png";
import "./NavbarAh.css";

const NavbarAh = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <Link className="navbar-brand"> <img src={logo} width="150px" alt="" /> </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link mr-3" to="/">
              Home
              </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link mr-3" to="/#about">
              About
              </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link mr-3" to="/#service">
              Service
              </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link mr-3" to="/#concern">
              Concern
              </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link mr-3" to="/#event">
              Event
              </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link mr-3" to="#footer">
              Contact Us
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-3" to="/dashboard">
              <button className="btn btn-brand text-white">Login</button>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default NavbarAh;
