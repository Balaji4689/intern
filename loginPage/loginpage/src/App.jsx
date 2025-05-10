import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overlay from './Pages/Overlay';
import Login from './Pages/Login';
import Register from './Pages/Register';
import LandingPage from './Components/LandingPage';
import StudentDash from './Dashboards/StudentDashboard/studentDash';
import TeacherDash from './Dashboards/TeacherDashboard/TeacherDash';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/regiater" element={<Register/>} />
        <Route path="/student-dashboard" element={<StudentDash />} />
        <Route path="/teacher-dashboard" element={<TeacherDash />} />
      </Routes>
    </Router>
  );
}


export default App;

