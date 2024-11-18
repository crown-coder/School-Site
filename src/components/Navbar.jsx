import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">E-Learn</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/product-list">Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/admin-dashboard">Admin Dashboard</Link>
        <Link to="/mentor-dashboard">Mentor Dashboard</Link>
        <Link to="/student-dashboard">Student Dashboard</Link>
      </div>
    </nav>
  )
}

export default Navbar
