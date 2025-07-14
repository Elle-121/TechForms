import { Container, Navbar } from 'react-bootstrap';
import './Header.scss';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

// Assets
import companyLogoFull from '../assets/TechFactorsIncFull.png' 



function Header({ navVisible = true }) {

  return (
    <Navbar expand="lg" className="top-header py-2 px-3 bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <Container fluid className="justify-content-between align-items-center">
        <Link to="/" className="d-flex align-items-center">
          <img src={companyLogoFull} alt="Logo" height="50" className="me-2" />
        </Link>

        {navVisible && <Navigation/>}
      </Container>
    </Navbar>
  );
}

export default Header;

