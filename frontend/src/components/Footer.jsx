import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter">
        <h3>Newsletter</h3>
        <p>
          Subscribe and get the free IB videos, notes, tips and product guides.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
        <p className="newsletter-disclaimer">
          By submitting this form, I agree to the data entered being used by
          Nail IB (nailib.com is a product of Turnix) for sending newsletters
          and promotional offers. Your data shall be kept until you unsubscribe.
          In accordance with current laws and regulations, you can unsubscribe
          at any time by clicking on the link in the promotional emails that we
          send to you. Subject to the conditions provided for by applicable
          legislation, you have rights in relation to your data. To find out
          more, see our{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            data protection policy
          </a>
          . You can exercise your rights at any time by writing to{" "}
          <a href="mailto:support@nailib.com">support@nailib.com</a>.
        </p>
      </div>

      {/* Social Section */}
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          Nail IB®, a product of Turnix. All rights reserved 2016-2025©
        </p>
        <p className="status">
          <span className="status-dot"></span> All services are online
        </p>
      </div>
    </footer>
  );
};

export default Footer;
