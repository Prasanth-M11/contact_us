import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../homepage_css/navbar.css";

const NavHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const words = ["Engineering", "Excellence", "Eminent"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Changes every 2s

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="nav-hero">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">Thee<span className="highlight">Yora</span> <br />Solutions</div>
        <ul className="nav-links">
          <li><Link to="/glimpse" className="active">Glimpse</Link></li>
          <li><Link to="/offerings">Offerings</Link></li>
          <li><Link to="/minds">Minds Behind</Link></li>
          <li><Link to="/contact">Let's Talk</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavHero;
