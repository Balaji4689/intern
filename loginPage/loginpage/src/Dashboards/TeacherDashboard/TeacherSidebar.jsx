import React, { useState, useEffect } from 'react';
import '../Dashboards.css';
import {
  QrCodeScanner,
  Dashboard,
  HeadsetMic,
  Logout,
  Class as ClassIcon
} from '@mui/icons-material';
import logo from '../../assets/QR-logo.png';

const TeacherSidebar = ({ onNavigate }) => {
  const [userName, setUserName] = useState("Teacher");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedImage = localStorage.getItem("profileImage");
    if (storedName) setUserName(storedName);
    if (storedImage) setProfileImage(storedImage);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <aside className='sidebar-container' aria-label="Teacher Sidebar">
      <div>
        <div className='logo-section'>
          <img src={logo} alt="QRCodeAttend Logo" className='sidebar-logo' />
          <span className='logo-text'>QRCodeAttend</span>
        </div>

        <nav>
          <div className='sidebar-item' onClick={() => onNavigate('Dashboard')}>
            <Dashboard fontSize='medium' />
            <span>Dashboard</span>
          </div>

          <div className='sidebar-item' onClick={() => onNavigate('QR Generator')}>
            <QrCodeScanner fontSize='medium' />
            <span>QR Generator</span>
          </div>

          <div className='sidebar-item' onClick={() => onNavigate('Class')}>
            <ClassIcon fontSize='medium' />
            <span>Class</span>
          </div>
        </nav>
      </div>

      <div className='sidebar-bottom'>
        <div className='sidebar-item support'>
          <HeadsetMic fontSize='medium' />
          <span>Support</span>
        </div>

        <div className='sidebar-item logout' onClick={handleLogout}>
          <Logout fontSize='medium' />
          <span>Logout</span>
        </div>

        <label htmlFor="teacher-profile-upload" className='profile-wrapper' title="Upload Profile Picture">
          <img
            src={profileImage || 'https://via.placeholder.com/40'}
            alt={`${userName}'s profile`}
            className='profile-img'
          />
          <span>{userName}</span>
          <input
            id="teacher-profile-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    </aside>
  );
};

export default TeacherSidebar;
