import React from 'react';
import './navbar.scss';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navItems">
          <div className="navLogo">Dewabook</div>
          <div className="navButton">
            <button className="item">Register</button>
            <button className="item">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
