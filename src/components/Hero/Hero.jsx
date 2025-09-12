// Hero.jsx (substitua a parte do <Col lg={6}> que contém a imagem)
import { Container, Row, Col, Button } from 'react-bootstrap';
import fctecImage from '../../assets/images/imgcapa.jpg';

const Hero = () => {
  return (
    <section id="about" className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">
              Soluções Digitais <span className="text-primary">Inovadoras</span>
            </h1>
            <p className="lead mb-4">
              Desenvolvemos aplicações web modernas e escaláveis com as melhores tecnologias do mercado.
            </p>
            <div className="d-flex gap-3">
              <Button href="#products" variant="primary" size="lg" className="px-4 py-2 neumo-btn">
                Nossos Serviços
              </Button>
              <Button href="https://wa.me/5521968810478" target="_blank" variant="outline-primary" size="lg" className="px-4 py-2">
                Fale Conosco
              </Button>
            </div>
          </Col>

          <Col lg={6}>
            {/* imagem dentro de um bloco neumo */}
            <div className="hero-neumo">
              <img
                src={fctecImage}
                className="img-fluid"
                alt="Ilustração de tecnologia"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
