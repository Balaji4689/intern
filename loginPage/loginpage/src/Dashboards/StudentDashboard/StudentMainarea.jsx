import React from 'react';
import '../Dashboards.css';

const StudentMainarea = () => {
  return (
    <div className="mainarea-container">
      <h3 className="dashboard-heading">Dashboard</h3>
      <div className="dashboard-main-banner">
        <div className="banner-text">
          <h2>Welcome to QRCodeAttend</h2>
          <p>Streamline attendance tracking with secure, QR-based solutions for students and teachers.</p>
          <p className="highlight">100+ users have already joined QRCodeAttend</p>
          <div className="banner-buttons">
            <button className="btn-red">Scanner QR</button>
            <button className="btn-dark">Contact Us</button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default StudentMainarea;
