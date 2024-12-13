import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    agreed: false,
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("Signup successful!");
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        setMessage("Signup failed!");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
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
              name="name"
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
              pattern="[0-9]{11}"
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
        {message && (
          <p className={`message ${isSuccess ? "success" : "error"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Signup;
