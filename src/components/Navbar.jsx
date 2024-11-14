import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
       <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/admin-dashboard">Admin Dashboard</Link> | <Link to="/mentor-dashboard">Mentor Dashboard</Link>
       | <Link to="/student-dashboard">Student Dashboard</Link>
    </nav>
  )
}

export default Navbar
