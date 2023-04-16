import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Components/firebase"; // Import the auth object from firebase.js

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase.js";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };
    // function signUp() {
    //     createUserWithEmailAndPassword(auth, email, pass)
    //         .then((userCredential) => {
    //             // Signed in
    //             const user = userCredential.user;
    //             navigate("/courses");
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // ..
    //         });
    // }

    function signUp() {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed up successfully
                const user = userCredential.user;
                // Update user's display name
                return updateProfile(user, { name })
                    .then(() => {
                        console.log("Sign up successful!");
                        navigate("/courses"); // Redirect to courses page after successful sign up
                    })
                    .catch((error) => {
                        console.error("Error updating display name:", error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error signing up:", errorMessage);
            });
    }

    // const signUp = async (email, password, displayName) => {
    //     try {
    //         const { user } = await createUserWithEmailAndPassword(
    //             auth,
    //             email,
    //             password
    //         );
    //         // Update the user's display name
    //         await updateProfile(user, { displayName });
    //         console.log("Sign up successful!");
    //     } catch (error) {
    //         console.error("Error signing up:", error);
    //     }
    // };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="full Name"
                />
                <label htmlFor="email">email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">password</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <button type="submit" onClick={signUp}>
                    Sign Up
                </button>
            </form>
            <button
                className="link-btn"
                onClick={() => props.onFormSwitch("login")}
            >
                Already have an account? Login here.
            </button>
        </div>
    );
};

export default Register;
