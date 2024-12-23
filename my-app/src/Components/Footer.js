import React from 'react';
import './Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2024 LearnIt. All rights reserved.</p>
      <div className="footer-links">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
