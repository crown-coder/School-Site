import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaUsers, FaCog, FaChartBar } from 'react-icons/fa';

const DashboardSidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/admin-dashboard', icon: <FaHome /> },
    { name: 'Courses', path: '/admin-dashboard/courses', icon: <FaBook /> },
    { name: 'Users', path: '/admin-dashboard/users', icon: <FaUsers /> },
    { name: 'Analytics', path: '/admin-dashboard/analytics', icon: <FaChartBar /> },
    { name: 'Settings', path: '/admin-dashboard/settings', icon: <FaCog /> },
  ];

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <nav className="sidebar-menu">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="sidebar-link"
            activeClassName="active-link"
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
