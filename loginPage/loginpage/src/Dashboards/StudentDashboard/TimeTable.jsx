import React, { useState } from 'react';
import '../Dashboards.css';

const scheduleData = {
  Mon: [
    { time: '08:00 to 08:50', faculty: 'Pusarla Sindhu', subject: 'Universal human values 2: understanding harmony' },
    { time: '09:00 to 09:50', faculty: 'Bhawani Sankar Panigrahi', subject: 'Information Security' },
    { time: '10:00 to 10:50', faculty: 'Dr. Shanti Chilukuri', subject: 'Computer Networks Lab' },
    { time: '11:00 to 11:50', faculty: 'Dr. Shanti Chilukuri', subject: 'Computer Networks Lab' },
    { time: '13:00 to 13:50', faculty: 'Dr. Terli Sankara Rao', subject: 'Data Mining and Analytics' },
    { time: '14:00 to 14:50', faculty: 'Polamarasetty Ravi Kumar', subject: 'Business Communication & Value Science IV' },
  ],
  Tue: [
    { time: '09:00 to 09:50', faculty: 'Dr. XYZ', subject: 'Machine Learning' },
    { time: '10:00 to 10:50', faculty: 'Dr. ABC', subject: 'Web Technologies' },
  ],
  Wed: [
    { time: '08:00 to 08:50', faculty: 'Prof. LMO', subject: 'Artificial Intelligence' },
    { time: '10:00 to 10:50', faculty: 'Dr. QRS', subject: 'Cloud Computing' },
  ],
  Thu: [
    { time: '09:00 to 09:50', faculty: 'Prof. TUV', subject: 'Mobile Application Development' },
    { time: '11:00 to 11:50', faculty: 'Dr. WXY', subject: 'Big Data Technologies' },
  ],
  Fri: [
    { time: '08:00 to 08:50', faculty: 'Dr. ZZZ', subject: 'DevOps' },
    { time: '13:00 to 13:50', faculty: 'Prof. AAA', subject: 'Cybersecurity Fundamentals' },
  ],
};

const TimeTable = () => {
  const [selectedDay, setSelectedDay] = useState('Mon');

  return (
    <div className="time-table-container">
      <h1 className="time-table-title">Time Table</h1>

      <div className="day-buttons">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`day-button ${selectedDay === day ? 'active' : ''}`}
          >
            {day}
          </button>
        ))}
      </div>

      <h2 className="day-heading">
        {{
          Mon: 'Monday',
          Tue: 'Tuesday',
          Wed: 'Wednesday',
          Thu: 'Thursday',
          Fri: 'Friday',
        }[selectedDay]}
      </h2>

      <div>
        {scheduleData[selectedDay].map((item, index) => (
          <div key={index} className="schedule-card">
            <p className="schedule-time">{item.time}</p>
            <p className="schedule-faculty">{item.faculty}</p>
            <p className="schedule-subject">{item.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
