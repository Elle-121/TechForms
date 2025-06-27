import React from 'react'
import { Container, Navbar, Col, Dropdown, Button } from 'react-bootstrap'

// Assets
import companylogofull from '../assets/TechFactorsIncFull.png' // <-- Make sure you have this file and path correct
import homeicon from '../assets/HomeIcon.svg'
import notificationsicon from '../assets/NotificationsIcon.svg'
import accountsicon from '../assets/AccountsIcon.svg'
import image from '../assets/ImageIcon.svg'

function Header() {

  const logout = async () => {
    await window.localStorage.clear()
    window.location.href = "/";
  }

  const profile = async () => {
    window.location.href = "/profile";
  }

  const home = async () => {
    window.location.href = "/";
  }

  const notifications = async () => {
    window.location.href = "/notifications";
  }

  const accounts = async () => {
    window.location.href = "/accounts";
  }

  // constants
  const icon_size = 30

  return (
    <Navbar expand="lg" className='top-header py-2 px-3'>
      <Container fluid className="justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {/* Logo */}
          <img src={companylogofull} alt="Logo" height="50" className="me-2" />
        </div>

        {/* Navigation and Dropdown */}
        <div className="d-flex align-items-center gap-1">
          <Navbar>
            <Container>
              <Navbar.Brand href="/" onClick={home}>
                <img
                  src={homeicon}
                  width={icon_size}
                  height={icon_size}
                  className="d-inline-block align-center"
                  alt="Home"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar>
            <Container>
              <Navbar.Brand href="/accounts" onClick={accounts}>
                <img
                  src={accountsicon}
                  width={icon_size}
                  height={icon_size}
                  className="d-inline-block align-center"
                  alt="Accounts"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar>
            <Container>
              <Navbar.Brand href="/notifications" onClick={notifications}>
                <img
                  src={notificationsicon}
                  width={icon_size}
                  height={icon_size}
                  className="d-inline-block align-center"
                  alt="Notifications"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>

          <Dropdown className='header-top'>
            <Dropdown.Toggle className='user-dropdown' variant="clear" bsPrefix="custom-toggle">
              <div className="d-flex align-items-center">
                <img src={image} width="40" height="40" className="me-2" alt="User" />
                <div className="d-flex flex-column text-start">
                  <span className="fw-bold">Rayu Ma Masakit</span>
                  <span className="text-muted">Full-Stack Developer</span>
                </div>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={profile}>Profile</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header

