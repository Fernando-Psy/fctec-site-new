import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import { servicesData } from './servicesData';
import './Services.css';

const Services = () => {
  return (
    <section id="products" className="services-section">
      <Container>
        {/* Header da Seção */}
        <div className="services-header">
          <div className="services-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Nossos Serviços</span>
          </div>

          <h2 className="services-title">
            Soluções Sob Medida Para Seu{' '}
            <span className="title-highlight">Negócio</span>
          </h2>

          <p className="services-description">
            Escolha o serviço ideal para transformar sua presença digital e
            alcançar resultados extraordinários no mercado online.
          </p>
        </div>

        {/* Grid de Serviços */}
        <Row className="g-4 services-grid">
          {servicesData.map((service, index) => (
            <Col
              key={service.id}
              lg={6}
              md={6}
              className="service-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>

        {/* CTA Footer */}
        <div className="services-cta">
          <div className="cta-card">
            <div className="cta-content">
              <h3 className="cta-title">
                Não encontrou o que procura?
              </h3>
              <p className="cta-text text-white">
                Entre em contato e criaremos uma solução personalizada
                especialmente para suas necessidades.
              </p>
            </div>
            <a
              href="https://wa.me/5521968810478?text=Oi, gostaria de um orçamento personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span className="cta-button-text">Falar com Consultor</span>
              <span className="cta-button-icon">→</span>
            </a>
          </div>
        </div>
      </Container>

      {/* Background Decorations */}
      <div className="services-bg-element services-bg-1"></div>
      <div className="services-bg-element services-bg-2"></div>
    </section>
  );
};

export default Services;