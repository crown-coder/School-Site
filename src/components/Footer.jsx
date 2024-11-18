import React from 'react'

const Footer = () => {
    return (
      <footer>
        <div className="footer-links">
          <a href="/about-us">About Us</a>
          <a href="/contact-us">Contact Us</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </footer>
    );
  }
  
export default Footer
