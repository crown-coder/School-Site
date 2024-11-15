import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import CourseDetailsPage from "./pages/CourseDetailsPage";

import Navbar from "./components/Navbar";

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/course-details" element={<CourseDetailsPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />}/>
        <Route path="/mentor-dashboard" element={<MentorDashboard />}/>
        <Route path="/student-dashboard" element={<StudentDashboard />}/>
      </Routes>
    </Router>
  )
}

export default App;