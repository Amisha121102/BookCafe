import { useState } from "react";
import axios from "axios";
import "./login.css";
import Register from "./register";
import { NavLink } from "react-router-dom";
const Login = () => {
  const loginAPI = async (email, pass) => {
    const response = await axios.post("http://localhost:4000/login", {
      email,
      pass
    });
    const data = await response.data;
    console.log(data);

    if (data.success) {
      alert("Login successful!");
    } else {
      alert(data.error || "Network error.");
    }
  };

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email);
    loginAPI(email, pass);
  };

  return (
    <div className="login-container">
      <div className="auth-form">
        <h2> Login</h2>
        <form className="login-form" onSubmit={handlesubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label form="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        <button
          className="link-btn"
          onClick={(props) => props.onFormSwitch("register")}  
        >
          {" "}
          <NavLink className="nav-link" to="/register">Don't have an account? Sign Up Now</NavLink>
        </button>
      </div>
    </div>
  );
};
export default Login;
