import React, { useState } from "react";
import axios from "axios";
import Login from "./login" ;
import "./login.css";
import { NavLink } from "react-router-dom";
const Register = (props) => {

    const registerAPI = async (pass, email, name) => {
        // setState("loading");
        const response = await axios.post("http://localhost:4000/register", {
            email,
            pass,
            name,
        });
        const data = await response.data;

        if (data.success) {
            alert("Registration successful!");
        } else {
            alert(data.error || "Network error.");
        }
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(email);
        registerAPI(pass, email, name)
    }

    return (
        <div className="login-container">
        <div className="auth-form">
            <h2> Register</h2>
            <form className="register-form" onSubmit={handlesubmit}>
                <label htmlFor="name"> Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="fullname" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label form="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Sign Up</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}> 
            <NavLink className="nav-link" to="/login">Already have an account? Log In</NavLink>
            </button>
        </div>
        </div>
    );
};

export default Register;