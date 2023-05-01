import React, { useState } from "react";
import "./App.css";
import Auth from "./Components/Auth";
import CoursePage from "./pages/CoursePage";
import Creators from "./pages/Creators";
import HomePage from "./pages/HomePage";
import IndividualCourse from "./pages/IndividualCourse";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
// import CertificatePage from "./pages/CertificatePage";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/auth" element={<Auth />} />
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/courses" element={<CoursePage />} />
                    <Route exact path="/creator" element={<Creators />} />
                    <Route path="/course/:id" element={<IndividualCourse />} />
                    {/* <Route path="/certificate" element={<CertificatePage />} /> */}
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