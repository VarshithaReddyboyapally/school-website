import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.png";   // <-- change path if needed

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo Section */}
        <a href="#home" className="logo-section">
          <img src={logo} alt="Future Kids School Logo" className="logo-img" />
          <h2 className="logo-text">FUTURE KIDS SCHOOL</h2>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#academics" onClick={() => setMobileOpen(false)}>Academics</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
