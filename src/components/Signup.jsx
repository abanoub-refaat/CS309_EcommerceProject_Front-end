import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="./assets/signup-image.svg" alt="Signup Visual" />
      </div>
      <div className="signup-content">
        <div className="signup-text">
          <h2>Create New Account</h2>
          <p>Please enter your details</p>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label> Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="signup-form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="signup-form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="signup-form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="signup-checkbox">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              required
            />
            <label>
              I agree to the <a href="/terms">Terms & Conditions</a>
            </label>
          </div>
          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
