import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Registration = (props) => {
  const {history} = props;

  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if(localStorage.getItem("authToken")){
      history.replace({
        pathname : "/home",
      });
    }
  },[history]);

  const registerHandler = async (e) => {
    e.preventDefault();
    const registerFormData = {
      name: name,
      email: email,
      password: password,
    };
    await axios
      .post("http://localhost:5000/api/user/register", registerFormData)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("authToken", response.token);
          history.replace("/home");
        }
      })
      .catch((err) => {
        setError(err);
      });
    setUsername("");
    setPassword("");
    setEmail("");
  };
  return (
    <>
      <div className="container">
        <form onSubmit={registerHandler}>
          <h3 className="screen-title">Register</h3>
          {error && <span className="error-message">{error}</span>}
          <div className="inputs">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              required
              placeholder="Enter Your Name Here ..."
              className="input-field"
              name="name"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Enter Your Email Address ..."
              className="input-field"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter a Strong Password ..."
              className="input-field"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btn">
              <button type="submit" style={{ cursor: "pointer" }}>
                Register
              </button>
            </div>
            <label htmlFor="login">
              Already Registered? <Link to="/login">Login</Link>
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
