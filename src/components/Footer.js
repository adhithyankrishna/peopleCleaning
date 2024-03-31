import React from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Footer.css"; // Make sure to create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-item">
            <FaMapMarkerAlt className="icon" />
            <span>123 Street Name, City, Country</span>
          </div>
          <div className="footer-item">
            <FaWhatsapp className="icon" />
            <span>+1234567890</span>
          </div>
          <div className="footer-item">
            <FaPhone className="icon" />
            <span>(123) 456-7890</span>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-item">
            <FaEnvelope className="icon" />
            <span>info@example.com</span>
          </div>
          <div className="footer-item">
            <FaInstagram className="icon" />
            <span>@yourinstagram</span>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-item">
            <FaYoutube className="icon" />
            <span>YouTube Channel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
