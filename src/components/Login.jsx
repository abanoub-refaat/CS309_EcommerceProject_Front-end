import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    fetch("http://localhost:4000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials or server error");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        localStorage.setItem("token", data.data.token);
        console.log(data.data);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error:", error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="./assets/login-image.svg" alt="Login Visual" />
      </div>
      <div className="login-content">
        <div className="text">
          <h2>Welcome back 👋</h2>
          <p>Please login here</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-mail"
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="login-links">
            <Link to="/forget-password" className="forget-password">
              Forgot Password?
            </Link>
            <Link to="/signup" className="register-link">
              Don&apos;t have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
