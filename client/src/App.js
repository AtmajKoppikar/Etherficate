import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import MetaMask from "./Components/MetaMask";
import Register from "./Components/Register";
import HomePage from "./pages/HomePage";

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <>

            <div className="App" style={{ display: "flex", flexDirection: "column" }}>
                {
                    currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
                }

            </div>
            <HomePage />










        </>
    );
}

export default App;  