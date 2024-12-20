import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedLoginData = localStorage.getItem("loginDate");
    if (savedLoginData) {
      try {
        const { email, password } = JSON.parse(savedLoginData);
        setEmail(email);
        setPassword(password);

        fetch("http://localhost:4000/api/v1/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(
                "Auto-login failed: Invalid credentials or server error"
              );
            }
            return res.json();
          })
          .then((data) => {
            console.log("Auto-login Success:");
            navigate("/home");
          })
          .catch((error) => {
            console.error("Auto-login Error:", error.message);
            localStorage.removeItem("loginDate");
          });
      } catch (error) {
        console.error("Error parsing login data:", error.message);
        localStorage.removeItem("loginDate");
      }
    }
  }, [navigate]);

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
        if (rememberMe) {
          const loginData = { email, password };
          localStorage.setItem("loginDate", JSON.stringify(loginData));
        }
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
          <p>please login here</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="email" className="form-label">
              Email Address{" "}
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
          {error && <p style={{ color: "red" }}>{error}</p>}
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
            <Link to="/forget" className="forgot-password">
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
