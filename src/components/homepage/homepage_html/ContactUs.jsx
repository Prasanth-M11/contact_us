import React, { useState } from "react";
import "../homepage_css/ContactUs.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
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
            <h3>Reach out and let's make things happen together!</h3>
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
    </div>
  );
};

export default ContactUs;