import { useState } from "react";
import "./Forget.css";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    fetch("http://localhost:5173/api/v1/users/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to reset password");
        }
        return response.json();
      })
      .then((data) => {
        setMessage("Password reset successfully.");
        console.log("Response:", data);
      })
      .catch((error) => {
        setMessage("Error resetting password. Please try again.");
        console.error("Error:", error);
      });
  };
  return (
    <div className="ChangePassword-container">
      <div className="ChangePassword-content">
        <div className="text">
          <h2>Reset your password</h2>
          <p>please enter your email and your new password</p>
        </div>
        <form className="ChangePassword-form" onSubmit={handleSubmit}>
          <div className="ChangePassword-form-group">
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
          <div className="ChangePassword-form-group">
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
          <div className="ChangePassword-form-group">
            <label htmlFor="ConfirmPassword" className="form-label">
              Confirm password{" "}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" className="ChangePassword-button">
            Change
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Forget;
