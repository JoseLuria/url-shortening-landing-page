import React from 'react';
import "./Footer.style.scss"
import Logo from "../../assets/logo.svg"
import IconFacebook from "../../assets/icon-facebook.svg"
import IconPinterest from "../../assets/icon-pinterest.svg"
import IconTwitter from "../../assets/icon-twitter.svg"
import  IconInstagram from "../../assets/icon-instagram.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="Logo" />
        <div className="footer-info">
          <section className="footer-lists">
            <div className="footer-list">
              <h3 className="list-title">Features</h3>
              <ul className="list">
                <li className="list-item">Link Shortening</li>
                <li className="list-item">Branded Links</li>
                <li className="list-item">Analytics</li>
              </ul>
            </div>

            <div className="footer-list">
              <h3 className="list-title">Resources</h3>
              <ul className="list">
                <li className="list-item">Blog</li>
                <li className="list-item">Developers</li>
                <li className="list-item">Support</li>
              </ul>
            </div>

            <div className="footer-list">
              <h3 className="list-title">Company</h3>
              <ul className="list">
                <li className="list-item">About</li>
                <li className="list-item">Our Team</li>
                <li className="list-item">Careers</li>
                <li className="list-item">Contact</li>
              </ul>
            </div>

          </section>
          <section className="footer-icons">
            <img className="social-icon" src={IconFacebook} alt="Facebook Icon"/>
            <img className="social-icon" src={IconTwitter} alt="Twitter Icon"/>
            <img className="social-icon" src={IconPinterest} alt="Pinterest Icon"/>
            <img className="social-icon" src={IconInstagram} alt="Instagram Icon"/>
          </section>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
