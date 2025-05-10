
import React, { useState } from 'react';
import StudentSideBar from './StudentSideBar';
import '../Dashboards.css';
import StudentMainarea from './StudentMainarea';
import QRScanner from './QRScanner';
import TimeTable from './TimeTable';
import Attendance from './Attendance';

const StudentDash = () => {
  const [activeContent, setActiveContent] = useState('dashboard');

  const handleNavigation = (itemName) => {
    setActiveContent(itemName.toLowerCase().replace(/\s+/g, '')); 
  };

  let contentToDisplay;
  switch (activeContent) {
    case 'dashboard':
      contentToDisplay = <StudentMainarea />;
      break;
    case 'qrscanner':
      contentToDisplay = <QRScanner />;
      break;
    case 'timetable':
      contentToDisplay = <TimeTable />;
      break;
    case "attendance":
      contentToDisplay=<Attendance/>
      break;
    default:
      contentToDisplay = <StudentMainarea />; 
  }

  return (
    <div className='main-container'>
      <StudentSideBar onNavigate={handleNavigation} />
      <div className='content-area'>
        {contentToDisplay}
      </div>
    </div>
  );
};

export default StudentDash;