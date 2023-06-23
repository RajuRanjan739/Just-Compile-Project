import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.email) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/todo");
    } else {
      alert("Enter Valid Details");
    }
  };
  return (
    <div>
      {/* <Nav /> */}
      <div className="nav-ul"></div>
      <div className="login">
        <input
          className="inputBox"
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputBox"
          value={password}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="appButton" type="button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
