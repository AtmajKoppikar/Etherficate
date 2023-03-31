import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

function Auth() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div>
            <div className="App" style={{ display: "flex", flexDirection: "column" }}>
                {
                    currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
                }

            </div>
        </div>
    )
}

export default Auth