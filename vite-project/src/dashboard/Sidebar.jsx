import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="d-flex flex-column p-3 bg-dark text-white vh-100">
      <h4 className="text-center mb-4">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/users">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
