import {Container, Navbar, Dropdown} from 'react-bootstrap'

// Assets
import companylogofull from '../assets/TechFactorsIncFull.png' 
import homeicon from '../assets/HomeIcon.svg'
import notificationsicon from '../assets/NotificationsIcon.svg'
import accountsicon from '../assets/AccountsIcon.svg'
import image from '../assets/PNGIcon.svg'

function Header() {

  const logout = async () => {
    await window.localStorage.clear()
    window.location.href = "/";
  }
  const home = async () => {
    window.location.href = "/";
  }
  const accounts = async () => {
    window.location.href = "/accounts";
  }
  const profile = async () => {
    window.location.href = "/profile";
  }


  // constants
  const icon_size = 30
  const profile_icon_size = 40

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
          <Dropdown className='header-top'>
            <Dropdown.Toggle className='notification-dropdown d-flex align-items-center justify-content-center w-100' variant="clear" bsPrefix="custom-toggle">
              <img
                src={notificationsicon}
                width={icon_size}
                height={icon_size}
                className="me-2"
                alt="Notifications"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-center-menu text-center">
              <Dropdown.Item>Placeholder</Dropdown.Item>
            </Dropdown.Menu>

          </Dropdown>

          <Dropdown className='header-top me-5'>
            <Dropdown.Toggle className='user-dropdown w-100' variant="clear" bsPrefix="custom-toggle">
              <div className="d-flex align-items-center justify-content-end w-100">
                <img src={image} width={profile_icon_size} height={profile_icon_size} className="me-2" alt="User" />
                <div className="d-flex flex-column text-start">
                  <span className="fw-bold">Rayu Ma Masakit</span>
                  <span className="text-muted">Full-Stack Developer</span>
                </div>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
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

