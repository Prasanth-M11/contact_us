import React from 'react';
import './ContactUs.css';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Custom X Logo SVG Component
const XLogo = () => (
  <svg className="x-logo" width="24" height="24" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" fill="currentColor" />
  </svg>
);

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div>
            <span className="logo-text">Thee</span>
            <span className="logo-text1">Yora</span>
          </div>
          <span className="logo-subtext">Solutions</span>
        </div>
        <nav className="nav">
          <a href="#glimpse">Glimpse</a>
          <a href="#offerings">Offerings</a>
          <a href="#minds-behind">Minds Behind</a>
          <a href="#lets-talk" className="lets-talk">
            Let's Talk
          </a>
        </nav>
      </header>

      {/* Main Section */}
      <main className="main">
        <div className="background-image">
          <h1>Connect Us</h1>
        </div>
        <div className="content">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Connect Us</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="+91 Phone Number" required />
              <select required>
                <option value="" disabled selected>
                  Industry
                </option>
                <option value="tech">Tech</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="other">Other</option>
              </select>
              <select required>
                <option value="" disabled selected>
                  Service Interested In
                </option>
                <option value="consulting">Consulting</option>
                <option value="development">Development</option>
                <option value="support">Support</option>
              </select>
              <textarea placeholder="Type Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Need More Information ?</h2>
            <h3>Get in touch</h3>
            <p>Reach out and let's make things happen together!</p>
            <div className="info-item">
              <FaPhone className="icon" />
              <span>+91 xxxxxxxxxx</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>xyz@gmail.com</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>346, Income Tax Colony, 84 HOSHL, India</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          <span className="logo-text">TheeYora</span>
          <span className="logo-subtext">Solutions</span>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#glimpse">Glimpse</a>
          <a href="#offerings">Offerings</a>
          <a href="#minds-behind">Minds Behind</a>
          <a href="#lets-talk">Let's Talk</a>
        </div>
        <div className="footer-policies">
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-conditions">Terms & Conditions</a>
          <a href="#faqs">FAQs</a>
          <a href="#data-security">Data Security</a>
        </div>
        <div className="social-icons">
          <div className="social-item">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <span>Instagram</span>
          </div>
          <div className="social-item">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <span>LinkedIn</span>
          </div>
          <div className="social-item">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <span>Facebook</span>
          </div>
          <div className="social-item">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <XLogo />
            </a>
            <span>Twitter</span>
          </div>
          <div className="social-item">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <span>YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;