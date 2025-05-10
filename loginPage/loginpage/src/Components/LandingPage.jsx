import React from "react";
import logo from '../assets/QR-logo.png'
import { Link } from "react-router-dom";
import "../App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import youtube from "../assets/youtube.png";
import insta from "../assets/insta.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

const SocialMediaLink = (props) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <img src={props.src} className="social-media-img" alt={props.alt} />
    </a>
  );


function LandingPage() {
  return (
    <div className="landingPage-container">
      <nav className="landingPage-navbar">
        <div className="landingPage-logo">
        <img src={logo} alt="QR Logo" className="QR-logo" />
        <span>QRCodeAttend</span>
        </div>
        <div className="landingPage-nav-links">
        <Link to="/login">
            <button className="landingPage-login">Log In</button>
          </Link>
          <Link to="/regiater">
            <button className="landingPage-signup">Sign Up</button>
          </Link>
        </div>
      </nav>

      <header className="landingPage-hero-section">
        <div className="landingPage-hero-text">
          <h1>
            Streamline Attendance <br /> Tracking with QR Codes
          </h1>
          <p>
            QRCodeAttend offers a seamless and efficient solution for recording attendance without
            the need for traditional methods like manual sign-ins or proxy submissions.
          </p>
          <div className="landingPage-hero-buttons">
            <button className="landingPage-get-started">Get Started</button>
          </div>
        </div>
        <div className="landingPage-hero-image">
        <img src={logo} alt="QR Logo" className="QR-logo-hero" />
        </div>
      </header>
      <div>
      </div>
      <section className="landingPage-features">
  <h2>Key Features</h2>
  <p className="features-subtitle">
    Discover how QRCodeAttend can transform your attendance tracking process
  </p>
  <div className="features-grid">
    <div className="feature-card">
      <div className="feature-icon"><i className="fas fa-qrcode"></i></div>
      <h3>QR Code Generation</h3>
      <p className="feature-sub">Generate unique QR codes linked to profiles or events for easy scanning</p>
      <p>Users can generate unique QR codes linked to their profiles or events, facilitating easy scanning for attendance marking.</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon"><i className="fas fa-clock"></i></div>
      <h3>Dynamic Time Change</h3>
      <p className="feature-sub">Automatically update attendance records based on timing changes</p>
      <p>The application dynamically updates attendance records based on changes in timing, ensuring accurate and up-to-date tracking.</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
      <h3>Proxy-Free Attendance</h3>
      <p className="feature-sub">Prevent proxy attendance with advanced security algorithms</p>
      <p>Advanced algorithms are implemented to prevent proxy attendance, enhancing the integrity of attendance data.</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon"><i className="fas fa-users-cog"></i></div>
      <h3>User Management</h3>
      <p className="feature-sub">Comprehensive tools for managing users and access rights</p>
      <p>Administrators can manage user profiles, access rights, and attendance data, ensuring security and accountability.</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon"><i className="fas fa-chart-bar"></i></div>
      <h3>Reporting and Analytics</h3>
      <p className="feature-sub">Gain insights into attendance patterns and trends</p>
      <p>Comprehensive reporting tools provide insights into attendance patterns, trends, and anomalies for better decision-making.</p>
    </div>
  </div>
</section>
<section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h1 className="title">Get in touch</h1>
            <p className="subtitle">Fill in the form to start a conversation</p>
            <div className="info-list">
              <p className="info-item">
                <span className="icon">📍</span> City Visakhapatnam, Rushikonda -530045 </p>
              <p className="info-item">
                <span className="icon">📞</span> 1234567890
              </p>
              <p className="info-item">
                <span className="icon">📧</span> contact@business.com
              </p>
              <div className="social-media">
            <h2 className="social-media-title">Follow Us</h2>
            <p className="social-media-description">
              Connect with us on social media!
            </p>
            <div className="social-media-links">
              <SocialMediaLink href="https://www.instagram.com/" src={insta} alt="Instagram" />
              <SocialMediaLink href="https://www.youtube.com/" src={youtube} alt="YouTube" />
              <SocialMediaLink href="https://www.whatsapp.com/" src={whatsapp} alt="WhatsApp" />
              <SocialMediaLink href="https://www.facebook.com/" src={facebook} alt="Facebook" />
              <SocialMediaLink href="https://www.twitter.com/" src={twitter} alt="Twitter" />
            </div>
          </div>
            </div>
          </div>
          <form className="LandingPage-contact-form" >
            <div>
              <h2 className="LandingPage-contact-heading">Get In Touch With Us!</h2>
              <p className="LandingPage-contact-heading1">
                Thank you for choosing QRCodeAttend offers a seamless and efficient solution for 
                recording attendance without the need for traditional methods like manual sign-ins or
                 proxy submissions.
              </p>
            </div>
            <label>
              <input  type="text" name="Name" placeholder="Name" />
            </label>
            <label>
              <input  type="email" name="email" placeholder="sample@gmail.com"  />
            </label>
            <label>
              <textarea rows="3" name="message" placeholder="Your message"  ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default LandingPage ;


