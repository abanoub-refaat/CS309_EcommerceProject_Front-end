import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Error from "./components/Error";
import Forget from "./components/Forget";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/products" element={<Products />} />
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
