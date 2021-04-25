import React, { useState, useEffect } from "react";
import { axios } from 'axios';
import { Link } from 'react-router-dom';

const Login = (props) => {
  // console.log(props);
  const {history} = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // useEffect(() => {
  //   if(localStorage.getItem("authToken")){
  //     console.log(`Token :${localStorage.getItem("authToken")}`)
  //     history.replace("/home");
  //   }
  // },[history]);

  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "content-Type": "application/json"
      }
    }

    try {
      await axios.post("api/user/login", { email, password}, config)
        .then(response => response.json())
        .then(data => console.log(data));
      // const {data} = await axios.post("api/user/login", { email, password}, config);
      // // localStorage.setItem("authToken", data.token);
      // history.push("/homePage");  
      // console.log(data);
    } catch (error) {
      setError(error.response.data.error);
    }
  }

  return (
    <div className="container">
      <form onSubmit={loginHandler}>
        <h3 className="screen-title">Login</h3>
        {error && <span className="error-message">{error}</span>}
      <div className="inputs">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          required
          placeholder="Enter Your Email Address ..."
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Your Password ..."
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btn"><button type="submit">Login</button></div>
        <label htmlFor="">Not Yet Registered? <Link to="/register">Register</Link></label>
      </div>
      </form>
    </div>
  );
};

export default Login;
