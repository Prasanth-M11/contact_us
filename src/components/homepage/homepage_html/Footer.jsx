import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../homepage_css/Footer.css";
import instagramIcon from "../../../assests/instagram.png";
import linkedinIcon from "../../../assests/linkedin.png";
import twitterIcon from "../../../assests/twitter.png";
import youtubeIcon from "../../../assests/youtube.png";
import facebookIcon from "../../../assests/facebook.png";
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";

const socialIcons = {
  default: {
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    twitter: <FaXTwitter />,
    youtube: <FaYoutube />,
    facebook: <FaFacebook />,
  },
  hovered: {
    instagram:  <img src={instagramIcon} alt="Instagram" />,
    linkedin:  <img src={linkedinIcon} alt="LinkedIn" />,
    twitter:  <img src={twitterIcon} alt="Twitter" />,
    youtube:<img src={youtubeIcon} alt="YouTube" /> ,
    facebook:  <img src={facebookIcon} alt="Facebook" />,
  },
};

const Footer = () => {
  const [hovered, setHovered] = useState("");

  return (
    <footer className="footer">
      {/* Left Section - Logo and Name */}
      <div className="footer-left">
        <div className="logo-box">LOGO</div>
        <p className="company-name">
          Thee<span className="highlight">Yora</span> <br />Solutions
        </p>
      </div>

      {/* Center Section - Quick Links */}
      <div className="footer-center">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/glimpse" className="active">Glimpse</Link></li>
          <li><Link to="/offerings">Offerings</Link></li>
          <li><Link to="/minds">Minds Behind</Link></li>
          <li><Link to="/contact">Let's Talk</Link></li>
        </ul>
      </div>

      {/* Right Section - Policies and Social Media */}
      <div className="footer-right">
        <div className="policy-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/data-security">Data Security</Link>
        </div>
        <div className="social-icons">
          {Object.keys(socialIcons.default).map((key) => (
            <span
              key={key}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered("")}
            >
              {hovered === key ? socialIcons.hovered[key] : socialIcons.default[key]}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
