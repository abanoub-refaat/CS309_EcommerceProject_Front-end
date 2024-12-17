import { useState } from "react";
import "./Forget.css";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== ConfirmPassword) {
      setErrorMessage("Passwords do not match!");
    } else {
      setErrorMessage("");
      alert("Password Changed successfully!");
      // Proceed with form submission logic
    }
    // Handle login logic here
    fetch("https://example.com/api/Forget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, ConfirmPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle successful change password
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle change password error here
      });
  };
  return (
    <div className="ChangePassword-container">
      <div className="ChangePassword-content">
        <div className="text">
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
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button type="submit" className="ChangePassword-button">
            Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forget;
