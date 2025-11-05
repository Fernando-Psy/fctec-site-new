import { Container, Row, Col, Button } from 'react-bootstrap';
import fctecImage from '../../assets/images/imgcapa.jpg';
import './Hero.css';

const Hero = () => {
  const features = [
    { icon: '⚡', text: 'Desenvolvimento Ágil' },
    { icon: '🎨', text: 'Design Moderno' },
    { icon: '📱', text: 'Totalmente Responsivo' },
    { icon: '🚀', text: 'Performance Otimizada' }
  ];

  return (
    <section id="about" className="hero-section">
      <Container>
        <Row className="align-items-center g-4">
          {/* Coluna de Conteúdo */}
          <Col lg={6} className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">✦</span>
              <span className="badge-text">Soluções Digitais Premium</span>
            </div>

            <h1 className="hero-title">
              Transforme sua presença{' '}
              <span className="hero-gradient-text">digital</span>{' '}
              com excelência
            </h1>

            <p className="hero-description">
              Desenvolvemos aplicações web corporativas que combinam design
              sofisticado, tecnologia de ponta e resultados mensuráveis para
              impulsionar o crescimento do seu negócio.
            </p>

            {/* Features Grid */}
            <div className="hero-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-cta-group">
              <Button
                href="#products"
                className="btn-hero-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                <span className="btn-content">
                  <span className="btn-text">Conhecer Serviços</span>
                  <span className="btn-arrow">→</span>
                </span>
                <div className="btn-glow"></div>
              </Button>

              <Button
                href="https://wa.me/5521968810478"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary"
              >
                <span className="btn-icon">💬</span>
                <span className="btn-text">Falar com Especialista</span>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="hero-social-proof">
              <div className="social-proof-item">
                <div className="proof-number">50+</div>
                <div className="proof-label">Projetos</div>
              </div>
              <div className="social-proof-divider"></div>
              <div className="social-proof-item">
                <div className="proof-number">98%</div>
                <div className="proof-label">Satisfação</div>
              </div>
              <div className="social-proof-divider"></div>
              <div className="social-proof-item">
                <div className="proof-number">15+</div>
                <div className="proof-label">Tecnologias</div>
              </div>
            </div>
          </Col>

          {/* Coluna de Imagem */}
          <Col lg={6} className="hero-image-col">
            <div className="hero-image-wrapper">
              <div className="image-decoration decoration-1"></div>
              <div className="image-decoration decoration-2"></div>
              <div className="hero-image-container">
                <img
                  src={fctecImage}
                  alt="Soluções digitais FCTEC"
                  className="hero-image"
                />
                <div className="image-overlay"></div>
              </div>

              {/* Floating Card */}
              <div className="floating-card">
                <div className="floating-card-icon">✓</div>
                <div className="floating-card-content">
                  <div className="floating-card-title">Qualidade Garantida</div>
                  <div className="floating-card-text">Código limpo e otimizado</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Background Elements */}
      <div className="hero-bg-circle hero-bg-circle-1"></div>
      <div className="hero-bg-circle hero-bg-circle-2"></div>
    </section>
  );
};

export default Hero;