import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/firebase"; // Import useAuth hook from firebase.js

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
            <div className="profile">Welcome</div>
        </nav>
    );
}

export default Navbar;
