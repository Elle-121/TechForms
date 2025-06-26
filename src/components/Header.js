import React from 'react'
import { Container, Navbar, Col, Dropdown, Button } from 'react-bootstrap'
import companylogofull from '../assets/TechFactorsIncFull.png' // <-- Make sure you have this file and path correct
import houseicon from '../assets/HomeIcon.png'
import notificationsicon from '../assets/NotificationsIcon.png'
import image from '../assets/ImageIcon.png'

function Header() {

  const logout = async () => {
    await window.localStorage.clear()
    window.location.href = "/";
  }

  return (
    <Navbar expand="lg" className='top-header py-2 px-3'>
      <Container fluid className="justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {/* Logo */}
          <img src={companylogofull} alt="Logo" height="40" className="me-2" />
        </div>

        {/* Navigation and Dropdown */}
        <div className="d-flex align-items-center gap-1">
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={houseicon}
                  width="20"
                  height="20"
                  className="d-inline-block align-center"
                  alt="Home"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar>
            <Container>
              <Navbar.Brand href="#notifications">
                <img
                  src={notificationsicon}
                  width="20"
                  height="20"
                  className="d-inline-block align-center"
                  alt="Notifications"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>

          <Dropdown className='header-top'>
            <Dropdown.Toggle className='user-dropdown' variant="light">
              <img src={image} width="20" height="20" className="me-2" alt="User" />
              Rayu Ma Masakit
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header

