import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-brand"><span className="nav-span">LIFE</span>Sports</NavLink>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/exercises" activeClassName="nav-active" className="nav-link">Exercises</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create" activeClassName="nav-active" className="nav-link">New Workout</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/user" activeClassName="nav-active" className="nav-link">Create User</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;