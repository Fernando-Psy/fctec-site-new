// Header.jsx (apenas as partes modificadas)
import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const handleNavClick = () => setExpanded(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    handleNavClick();
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className="custom-navbar py-3"
        expanded={expanded}
        onToggle={setExpanded}
        sticky="top"
      >
        <Container>
          <Navbar.Brand
            href="#"
            className="d-flex align-items-center"
            onClick={() => scrollToSection('home')}
          >
            {/* Badge com efeito neumo */}
            <span className="brand-badge">FCTEC</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" className="border-0">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="align-items-lg-center">
              <Nav.Link onClick={() => scrollToSection('about')} className="px-3 py-2">
                Sobre
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection('products')} className="px-3 py-2">
                Serviços
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection('location')} className="px-3 py-2">
                Contato
              </Nav.Link>
              <Button
                href="https://wa.me/5521968810478"
                target="_blank"
                variant="primary"
                className="ms-lg-3 mt-3 mt-lg-0 neumo-btn"
              >
                Orçamento
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
