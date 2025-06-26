import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Header() {
  // State to manage notifications visibility
  const [showNotifications, setShowNotifications] = useState(false);
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowProfile(false);
  };

  // State to manage profile visibility
  const [showProfile, setShowProfile] = useState(false);
  const toggleProfile = () => {
    setShowProfile(!showProfile);
    setShowNotifications(false);
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">TechFactors</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/accounts">Accounts</Link>



        <button onClick={toggleNotifications} className="nav-btn">Notifications</button>
        {showNotifications && (
          <div className="dropdown">
            <p>You have 3 new alerts</p>
            <p>Message from Admin</p>
            <Link className="nav-link" to="/notifications">Notifications</Link>
          </div>
        )}

        <button onClick={toggleProfile} className="nav-btn">Profile</button>
        {showProfile && (
          <div className="dropdown">
            <p>Logged in as John Doe</p>
            <Link to="/profile">View Profile</Link>
            <button>Logout</button>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Header;
