import { useState } from "react";
import "./Forget.css";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    fetch("http://localhost:5173/api/v1/users/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        setLoading(false);
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
        setLoading(false);
        setMessage("Error resetting password. Please try again.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="forget-container">
      <div className="forget-content">
        <div className="forget-text">
          <h2>Reset Password</h2>
          <p>Enter your email and new password to reset your password.</p>
        </div>
        <form onSubmit={handleSubmit} className="forget-form">
          <div className="forget-form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="forget-form-group">
            <label htmlFor="password">New Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forget-form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading} className="forget-btn">
            {loading ? "Processing..." : "Reset Password"}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Forget;
