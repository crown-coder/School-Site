import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import CoursesPage from "./pages/CoursesPage";
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
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />}/>
        <Route path="/mentor-dashboard" element={<MentorDashboard />}/>
        <Route path="/student-dashboard" element={<StudentDashboard />}/>
      </Routes>
    </Router>
  )
}

export default App;