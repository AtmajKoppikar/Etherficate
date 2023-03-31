import React, { useState } from "react";
import "./App.css";
import Auth from "./Components/Auth";
import Navbar from "./Components/Navbar";
import CoursePage from "./pages/CoursePage";
import Creators from "./pages/Creators";
import HomePage from "./pages/HomePage";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import IndividualCourse from "./pages/IndividualCourse";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/auth" element={<Auth />} />
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/courses" element={<CoursePage />} />
                    <Route exact path="/creator" element={<Creators />} />
                    <Route exact path="/course" element={<IndividualCourse />} />
                </Routes>
            </Router>
            {/* <Auth />
            <HomePage /> */}
            {/* <Navbar /> */}
            {/* <Creators /> */}
            {/* <CoursePage /> */}

        </>
    );
}

export default App;  