import React from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Footer.css";
import Enq from "../components/Enq";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="engdiv">
        <Enq />
      </div>
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-item">
            <FaMapMarkerAlt className="icon" />
            <a href="https://www.google.com/maps/place/A.S+ORGANICS+%26A.S+PAN+SERVICES,+XEROX+,+PASSPORTSERVICES+,visa/@11.0144465,77.0234894,21z/data=!4m9!1m2!2m1!1s156+Shivaram+Nagar+Ramanathapuram+Coimbatore!3m5!1s0x3ba8576ba3e00e4d:0x408014a85f59b2b4!8m2!3d11.0145547!4d77.0234864!16s%2Fg%2F11kd5bp3tv?entry=ttu">
              <span className="link">
                4/137 Karuppakavunder Street Nethajipuram Areodrome Road
                Neelikonampalayam Coimbatore - 641033
              </span>
            </a>
          </div>
          <div className="footer-item">
            <FaWhatsapp className="icon" />
            <a href="https://wa.me/9342698063?text=Hello%20there!">
              <span className="link">9342698063</span>
            </a>
          </div>
          <div className="footer-item">
            <FaPhone className="icon" />
            <a href="tel:9342698063">
              <span className="link">9342698063</span>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-item">
            <FaEnvelope className="icon" />

            <span className="link">admin@peoplecleaningservices.in</span>
          </div>
          <div className="footer-item">
            <FaInstagram className="icon" />
            <a href="https://www.instagram.com/peoplecleaningservices/">
              <span className="link">@peoplecleaningservices</span>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-item">
            <FaYoutube className="icon" />
            <span className="link">peoplecleaning</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
