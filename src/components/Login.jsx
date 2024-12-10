import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    fetch("https://example.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle successful login here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle login error here
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
          <p>please login here</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Adress{" "}
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
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password{" "}
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
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              className="login-checkbox"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
          <div className="login-links">
            <Link href="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
            <Link href="/signup" className="register-link">
              Don&apos;t have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
