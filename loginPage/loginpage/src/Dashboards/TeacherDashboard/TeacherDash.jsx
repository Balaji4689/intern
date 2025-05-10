import React, { useState } from 'react';
import TeacherMainArea from './TeacherMainArea';
import TeacherSidebar from './TeacherSidebar';
import QRGenerator from './QRGenerator';
import Class from './Class';

const TeacherDash = () => {
  const [activeContent, setActiveContent] = useState('dashboard');

  const handleNavigation = (itemName) => {
    setActiveContent(itemName.toLowerCase().replace(/\s+/g, ''));
  };

  let contentToDisplay;
  switch (activeContent) {
    case 'dashboard':
      contentToDisplay = <TeacherMainArea />;
      break;
    case 'qrgenerator':
      contentToDisplay = <QRGenerator />;
      break;
    case 'class':
      contentToDisplay = <Class />;
      break;
    default:
      contentToDisplay = <TeacherMainArea />;
  }

  return (
    <div className='main-container'>
      <TeacherSidebar onNavigate={handleNavigation} />
      <div className='content-area'>
        {contentToDisplay}
      </div>
    </div>
  );
};

export default TeacherDash;
