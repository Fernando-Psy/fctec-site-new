import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleNavClick();
  };

  return (
    <header className="header-wrapper">
      <Navbar
        expand="lg"
        className="custom-navbar"
        expanded={expanded}
        onToggle={setExpanded}
        sticky="top"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="brand-container"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <div className="brand-logo">
              <span className="brand-text">FCTEC</span>
              <div className="brand-underline"></div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="custom-toggler"
          >
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link
                className="nav-link-custom"
                onClick={() => scrollToSection('about')}
              >
                <span className="nav-text">Sobre</span>
              </Nav.Link>

              <Nav.Link
                className="nav-link-custom"
                onClick={() => scrollToSection('products')}
              >
                <span className="nav-text">Serviços</span>
              </Nav.Link>

              <Nav.Link
                className="nav-link-custom"
                onClick={() => scrollToSection('location')}
              >
                <span className="nav-text">Contato</span>
              </Nav.Link>

              <div className="nav-cta-wrapper">
                <Button
                  href="https://wa.me/5521968810478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta"
                  onClick={handleNavClick}
                >
                  <span className="btn-icon">💬</span>
                  <span className="btn-text">Solicitar Orçamento</span>
                  <div className="btn-shine"></div>
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;