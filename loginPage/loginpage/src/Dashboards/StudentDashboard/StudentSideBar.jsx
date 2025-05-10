import React, { useState, useEffect } from 'react';
import '../Dashboards.css';
import { QrCodeScanner, CalendarMonth, Dashboard, HeadsetMic, Logout, AccessTime } from '@mui/icons-material';
import logo from '../../assets/QR-logo.png';

const StudentSideBar = ({ onNavigate }) => {
  const [userName, setUserName] = useState("Student");
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
    window.location.href = '/';
  };

  return (
    <aside className='sidebar-container' aria-label="Sidebar">
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

          <div className='sidebar-item' onClick={() => onNavigate('QR Scanner')}>
            <QrCodeScanner fontSize='medium' />
            <span>QR Scanner</span>
          </div>

          <div className='sidebar-item' onClick={() => onNavigate('Time Table')}>
            <CalendarMonth fontSize='medium' />
            <span>Time Table</span>
          </div>

          <div className='sidebar-item' onClick={() => onNavigate('Attendance')}>
            <AccessTime fontSize='medium' />
            <span>Attendance</span>
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

        <label htmlFor="profile-upload" className='profile-wrapper' title="Upload Profile Picture">
          <img src={profileImage || 'https://via.placeholder.com/40'} alt={`${userName}'s profile`} className='profile-img' />
          <span>{userName}</span>
          <input id="profile-upload" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
        </label>
      </div>
    </aside>
  );
};

export default StudentSideBar;
