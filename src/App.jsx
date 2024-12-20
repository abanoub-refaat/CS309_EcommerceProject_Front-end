import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Forget from "./components/Forget";
import AboutUs from "./components/AboutUs";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userProfile" element={<UserProfile />}/>
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
