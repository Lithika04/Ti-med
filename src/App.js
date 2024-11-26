import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Appointment from "./components/Appointment";
import HealthTips from "./components/HealthTips";
import MedicationReminder from "./components/MedicationReminder";
import UserProfile from "./components/UserProfile";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <center>
          <h1>Virtual Medical Application</h1></center>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/chatbot">Chatbot</Link></li>
              <li><Link to="/appointment">Appointment</Link></li>
              <li><Link to="/health-tips">Health Tips</Link></li>
              <li><Link to="/medication-reminder">Medication Reminder</Link></li>
              <li><Link to="/user-profile">User Profile</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/health-tips" element={<HealthTips />} />
          <Route path="/medication-reminder" element={<MedicationReminder />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>

        <footer>
          <p>© 2024 Virtual Medical App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}


export default App;
