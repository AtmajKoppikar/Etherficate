import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "./Logo.svg";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/creator">Create Course</Link>
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
            </ul>
            <div className="profile">Profile</div>
        </nav>
    );
}

export default Navbar;
