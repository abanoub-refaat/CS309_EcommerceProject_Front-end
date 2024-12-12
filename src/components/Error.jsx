import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
    return (    
    <div className="error-container">
        <div className="error-img">
            <img src="./assets/Error-not-found.svg" alt="Error-404" />
        </div>
        <div className="error-content">
            <p>page Not Found</p>
        </div>
        <div >
            <Link to = "/home" className="return-btn"> Home page</Link>
        </div>
    </div>       
    );           
};          

export default Error;








