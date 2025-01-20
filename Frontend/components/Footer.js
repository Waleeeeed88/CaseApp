import React from 'react';
import './Footer.css';
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <p>Find us on other social media platforms!</p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
        </div>
      </div>
      <div className="terms">
        <p>&copy; 2024 Amit and Waleed</p>
      </div>
    </div>
  );
}

export default Footer;
