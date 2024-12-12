import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<div>My Cart Page</div>} />
        <Route path="/wishlist" element={<div>My Wishlist Page</div>} />
        <Route path="/about" element={<div>About Us Page</div>} />
        <Route path="/terms" element={<div>Terms & Conditions Page</div>} />
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
