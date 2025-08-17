import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="h5 mb-3">FCTEC</h3>
            <p className="text-white">
              Soluções digitais inovadoras para impulsionar seu negócio.
            </p>
          </Col>

          <Col lg={2} className="mb-4 mb-lg-0">
            <h4 className="h6 mb-3">Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#about" className="text-white">Sobre</a></li>
              <li className="mb-2"><a href="#products" className="text-white">Serviços</a></li>
              <li className="mb-2"><a href="#location" className="text-white">Contato</a></li>
            </ul>
          </Col>

          <Col lg={3} className="mb-4 mb-lg-0">
            <h4 className="h6 mb-3">Contato</h4>
            <ul className="list-unstyled text-white">
              <li className="mb-2">contato@fctec.com.br</li>
              <li className="mb-2">(21) 96881-0478</li>
              <li>Belford Roxo, RJ</li>
            </ul>
          </Col>

          <Col lg={3}>
            <h4 className="h6 mb-3">Redes Sociais</h4>
            <div className="d-flex gap-3">
              <a href="https://instagram.com" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="https://facebook.com" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="https://wa.me/5521968810478" className="text-white">
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-4 bg-secondary opacity-10" />

        <Row>
          <Col className="text-center text-md-start">
            <p className="small text-white mb-0">
              &copy; {currentYear} FCTEC. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;