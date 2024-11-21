import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const DashboardTopbar = () => {
  return (
    <header className="dashboard-topbar">
      <div className="topbar-title">Welcome, Admin</div>
      <div className="topbar-actions">
        <button className="topbar-button">
          <FaBell />
        </button>
        <button className="topbar-button">
          <FaUserCircle />
        </button>
      </div>
    </header>
  );
};

export default DashboardTopbar;
