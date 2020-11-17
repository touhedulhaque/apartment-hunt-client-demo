import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../images/logos/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHdd,
  faComments,
  faPlus,
  faCog,
  faSignOutAlt,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";
import './Sidebar.css'; 
import { HashLink } from "react-router-hash-link";



const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <Link to="/">
          <img style={{ marginBottom: 30,width:150 }} src={logo} alt="" />
        </Link>

        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        {isAdmin ? (
          <div>
            <li>
              <Link to="/bookingAdmin" className="text-white">
                <FontAwesomeIcon icon={faList} />{" "}
                <span>Booking List</span>
              </Link>
            </li>
            <li>
              <Link to="/addRent" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Rent House</span>
              </Link>
            </li>
            <li>
              <Link to="/addAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add An Admin</span>
              </Link>
            </li>
          </div>
         ) : ( 
          <div>
            
            <li>
              <Link to="/bookingList" className="text-white">
                <FontAwesomeIcon icon={faHdd} /> <span>Booking List</span>
              </Link>
            </li>
            <li>
              <Link to="/addRent" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add  House</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;