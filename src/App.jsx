import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import "./Navbar.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;