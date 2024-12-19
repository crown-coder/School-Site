import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import CoursesPage from "./pages/CoursesPage";
import MentorDashboard from "./pages/MentorDashboard";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import EnrollmentPage from "./pages/EnrollmentPage";
import ThankYouPage from "./pages/ThankYouPage";
import AlbumDetails from "./pages/AlbumDetails"

import { WithNavbarLayout, WithoutNavbarLayout } from './layout/Layout'

import MyCourses from "./pages/MyCourses";

// import Navbar from "./components/Navbar";

function App () {

  return (
    <Router>

      <Routes>
        {/* Routes with Navbar */
        <Route element={<WithNavbarLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/course-details" element={<CourseDetailsPage />}/>
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>}
        
        {/* Routes without Navigation */}
        <Route element={<WithoutNavbarLayout />}>
          <Route path="/product/:id" element={<ProductPage />} />
          {/* <Route
            path="/my-courses"
            element = {
              <ProtectedRoute>
                <MyCourses />
              </ProtectedRoute>
            }
          >
          </Route> */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/enroll" element={<EnrollmentPage />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />}/>
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/album/:id" element={<AlbumDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;