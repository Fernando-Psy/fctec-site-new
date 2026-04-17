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
            <span className="badge-text">Atuacao Tecnologica</span>
          </div>

          <h2 className="services-title">
            Solucoes Digitais Para Estruturar Sua{' '}
            <span className="title-highlight">Operacao</span>
          </h2>

          <p className="services-description">
            Conheca como atuamos em desenvolvimento, integracoes e suporte.
            Mantemos canais diretos para tirar duvidas e iniciar conversas.
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
      </Container>

      {/* Background Decorations */}
      <div className="services-bg-element services-bg-1"></div>
      <div className="services-bg-element services-bg-2"></div>
    </section>
  );
};

export default Services;