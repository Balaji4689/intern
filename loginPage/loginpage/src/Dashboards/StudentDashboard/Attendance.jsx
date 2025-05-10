import React from 'react';
import { useLocation } from 'react-router-dom';

const Attendance = () => {
  const location = useLocation();
  const { data, time, subject, status } = location.state || {};

  return (
    <div style={{ padding: '20px' }}>
      <h2>Attendance Page</h2>
      {data ? (
        <div>
          <p><strong>Scanned Data:</strong> {data}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Subject:</strong> {subject}</p>
          <p><strong>Status:</strong> {status}</p>
        </div>
      ) : (
        <p>No attendance data available. Please scan the QR code.</p>
      )}
    </div>
  );
};

export default Attendance;
