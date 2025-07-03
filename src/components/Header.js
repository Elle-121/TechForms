import { Container, Navbar } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

// Assets
import companylogofull from '../assets/TechFactorsIncFull.png' 
import homeicon from '../assets/HomeIcon.svg'
import notificationsicon from '../assets/NotificationsIcon.svg'
import accountsicon from '../assets/AccountsIcon.svg'
import image from '../assets/PNGIcon.svg'

// notifs
import dummyNotifs from './dummyNotifs.js'

function Header() {

  const home = async () => {
    window.location.href = "/";
  }
  const accounts = async () => {
    window.location.href = "/accounts";
  }
  
  const notifications = async () => {
    window.location.href = "/notifications";
  }  
  
  const profile = async () => {
    window.location.href = "/profile";
  }
  


  // constants
  const icon_size = 30;
  const profile_icon_size = 40;
  const dummy_profile = 'Rayu Ma Masakit';
  const dummy_role = 'Employee';

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const userMenuRef = useRef(null);
  const notifMenuRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
      setShowUserMenu(false);
    }
    if (notifMenuRef.current && !notifMenuRef.current.contains(e.target)) {
      setShowNotifMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <Navbar expand="lg" className="top-header py-2 px-3 bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <Container fluid className="justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={companylogofull} alt="Logo" height="50" className="me-2" />
        </div>

        <div className="d-flex align-items-center gap-5">
          <img src={homeicon} width={icon_size} height={icon_size} onClick={home} style={{ cursor: 'pointer' }} />
          <img src={accountsicon} width={icon_size} height={icon_size} onClick={accounts} style={{ cursor: 'pointer' }} />

          {/* Notifications Dropdown */}
          <div ref={notifMenuRef} className={`custom-dropdown-notif ${showNotifMenu ? 'open' : ''}`}>
            <div className="dropdown-toggle" onClick={() => setShowNotifMenu(!showNotifMenu)}>
              <img src={notificationsicon} width={icon_size} height={icon_size} alt="Notifications" />
            </div>

            <div className="dropdown-menu" style={{ maxHeight: '500px', overflowY: 'auto', minWidth: '300px' }}>
              {dummyNotifs.slice(0, 10).map((notif, idx) => (
                <div
                  key={idx}
                  className="dropdown-item text-muted"
                  style={{
                    cursor: 'pointer',
                    padding: '0.5rem 1rem'
                  }}
                >
                  {notif.message}
                </div>
              ))}

              <div className="dropdown-divider" style={{ borderTop: '1px solid #eee', margin: '0.5rem 0' }}></div>

              <div
                className="dropdown-item"
                onClick={notifications}
                style={{
                  fontWeight: 400,
                  color: 'var(--tforange-color)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  padding: '0.5rem 1rem'
                }}
              >
                View All Notifications →
              </div>
            </div>
          </div>


          {/* User Dropdown */}
          <div ref={userMenuRef} className={`custom-dropdown-profile ${showUserMenu ? 'open' : ''}`}>
            <div className="dropdown-toggle" onClick={() => setShowUserMenu(!showUserMenu)}>
              <div className="d-flex align-items-center">
                <img src={image} width={profile_icon_size} height={profile_icon_size} className="me-2" alt="User" />
                <div className="d-flex flex-column text-start">
                  <span className="fw-bold">{dummy_profile}</span>
                  <span className="text-muted">{dummy_role}</span>
                </div>
              </div>
            </div>
            <div className="dropdown-menu">
              <a onClick={profile}>Profile</a>
              <Link to="/login">Log Out</Link>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

