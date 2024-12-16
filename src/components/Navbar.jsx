import React from 'react'
import { Link } from 'react-router-dom'

import { MdOutlineShoppingCart } from "react-icons/md"

import './NavBar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Unique<span>Shelves.</span></div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/product-list">Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/my-courses">My Courses</Link>
        {/* <Link to="/admin-dashboard">Admin Dashboard</Link>
        <Link to="/mentor-dashboard">Mentor Dashboard</Link>
        <Link to="/student-dashboard">Student Dashboard</Link> */}
      </div>
      <div className='search-cart-signup'>
          <input 
            type='search'
            placeholder='Search here'
            name='search'
          />
          <div className='shopping-icon'>
            <MdOutlineShoppingCart />
          </div>
          <Link to="/signup">Signup</Link>
      </div>
    </nav>
  )
}

export default Navbar
