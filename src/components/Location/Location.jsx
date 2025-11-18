import { Container, Row, Col } from 'react-bootstrap';
import './Location.css';

const Location = () => {
  const contactInfo = [
    {
      icon: 'bi-envelope',
      title: 'Email',
      value: 'fernando.cbj.tec@gmail.com',
      link: 'mailto:fernando.cbj.tec@gmail.com',
      color: '#2563eb'
    },
    {
      icon: 'bi-phone',
      title: 'Telefone',
      value: '(21) 96881-0478',
      link: 'tel:+5521968810478',
      color: '#10b981'
    },
    {
      icon: 'bi-geo-alt',
      title: 'Endereço',
      value: 'Belford Roxo, RJ',
      link: 'https://maps.google.com/?q=Belford+Roxo+RJ',
      color: '#f59e0b'
    }
  ];

  return (
    <section id="location" className="location-section">
      <Container>
        {/* Header */}
        <div className="location-header">
          <div className="location-badge">
            <span className="badge-icon">📍</span>
            <span className="badge-text">Entre em Contato</span>
          </div>

          <h2 className="location-title">
            Vamos <span className="title-gradient">Conversar</span>
          </h2>

          <p className="location-description">
            Estamos prontos para transformar suas ideias em realidade digital.
            Entre em contato e descubra como podemos ajudar seu negócio.
          </p>
        </div>

        {/* Contact Cards & Map */}
        <Row className="g-4 mb-5">
          {/* Contact Info Cards */}
          <Col lg={4}>
            <div className="contact-cards">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-card"
                  style={{ '--accent-color': item.color }}
                >
                  <div className="contact-icon-wrapper">
                    <i className={`bi ${item.icon} contact-icon`}></i>
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-title">{item.title}</h4>
                    <p className="contact-value">{item.value}</p>
                  </div>
                  <i className="bi bi-arrow-right contact-arrow"></i>
                </a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5521968810478"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta"
              >
                <div className="whatsapp-icon">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div className="whatsapp-content">
                  <h5 className="whatsapp-title">Fale no WhatsApp</h5>
                  <p className="whatsapp-text">Resposta rápida e atendimento personalizado</p>
                </div>
              </a>
            </div>
          </Col>

          {/* Map */}
          <Col lg={8}>
            <div className="map-container">
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.123456789!2d-43.4123456!3d-22.754321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9999999999999999%3A0x9999999999999999!2sRua%20Jo%C3%A3o%20Fernandes%20Neto%2C%201166%20-%20Centro%2C%20Belford%20Roxo%20-%20RJ%2C%2026100-000%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1601234567890!5m2!1spt-BR!2sbr"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização FCTEC"
                  className="map-iframe"
                />
              </div>

              {/* Map Overlay Info */}
              <div className="map-info-card">
                <div className="map-info-icon">
                  <i className="bi bi-pin-map-fill"></i>
                </div>
                <div className="map-info-content">
                  <h6 className="map-info-title">Nossa Localização</h6>
                  <p className="map-info-text">Belford Roxo, Rio de Janeiro</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Business Hours */}
        <div className="business-hours-card">
          <Row className="align-items-center">
            <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
              <div className="hours-icon-wrapper">
                <i className="bi bi-clock-history hours-icon"></i>
              </div>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <h4 className="hours-title">Horário de Atendimento</h4>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="hours-day">Quarta - Sexta</span>
                  <span className="hours-time">9:00 - 18:00</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Sábado</span>
                  <span className="hours-time">9:00 - 13:00</span>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-center text-md-end">
              <a
                href="https://wa.me/5521968810478"
                target="_blank"
                rel="noopener noreferrer"
                className="hours-cta-button"
              >
                <span>Agende uma Conversa</span>
                <i className="bi bi-calendar-check"></i>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Location;