import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-img">
        <img src="./assets/Error-not-found.svg" alt="Error-404" />
      </div>
      <div className="error-content">
        <h1>page Not Found</h1>
        <p>
          Looks like you’ve taken a wrong turn. Don’t worry, you can try
          searching for what you need or head back to our homepage.
        </p>
      </div>
      <div>
        <Link to="/home" className="return-btn">
          {" "}
          Home page
        </Link>
      </div>
    </div>
  );
};

export default Error;
