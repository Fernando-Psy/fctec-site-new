import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ContactModal from './ContactModal';
import { servicesData } from './servicesData';
import { scrollToElement } from '../../utils/scrollUtils';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState(null);

  useEffect(() => {
    const foundService = servicesData.find((s) => s.id === serviceId);
    if (foundService) {
      setService(foundService);
      // Usar requestAnimationFrame para evitar reflow forçado após setState
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      });
    } else {
      navigate('/');
    }
  }, [serviceId, navigate]);

  if (!service) return null;

  return (
    <>
      <section
        style={{
          padding: '6rem 2rem 4rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
        }}
      >
        <Container>
          {/* Breadcrumb */}
          <nav
            style={{
              marginBottom: '2rem',
              fontSize: '0.9rem',
              color: '#7a8a99',
            }}
          >
            <span
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer', color: '#4e83af' }}
            >
              Início
            </span>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span
              onClick={() => {
                navigate('/');
                // Usar função otimizada que aguarda DOM atualizar
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    scrollToElement('products', { behavior: 'smooth' });
                  });
                });
              }}
              style={{ cursor: 'pointer', color: '#4e83af' }}
            >
              Serviços
            </span>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span style={{ color: '#1a2129', fontWeight: '600' }}>
              {service.title}
            </span>
          </nav>

          <Row className="g-5 align-items-center">
            {/* Imagem */}
            <Col lg={6}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
                  border: '1px solid #f0f2f5',
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            </Col>

            {/* Conteúdo */}
            <Col lg={6}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background:
                    'linear-gradient(135deg, #ecf5fa 0%, #d9eaf4 100%)',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '50px',
                  marginBottom: '1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#3a5f7d',
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{service.icon}</span>
                <span>Serviço Profissional</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '800',
                  color: '#1a2129',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {service.title}
              </h1>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#7a8a99',
                  lineHeight: '1.7',
                  marginBottom: '2.5rem',
                }}
              >
                {service.detailedDescription || service.description}
              </p>

              {/* Botões CTA */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    background:
                      'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '1.125rem 2.5rem',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow =
                      '0 12px 28px rgba(37, 99, 235, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow =
                      '0 8px 20px rgba(37, 99, 235, 0.3)';
                  }}
                >
                  <span>📧</span>
                  <span>Solicitar Informações</span>
                </button>

                <a
                  href={service.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#25d366',
                    color: 'white',
                    border: 'none',
                    padding: '1.125rem 2.5rem',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow =
                      '0 12px 28px rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow =
                      '0 8px 20px rgba(37, 211, 102, 0.3)';
                  }}
                >
                  <span>💬</span>
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Detalhadas */}
      <section
        style={{
          padding: '4rem 2rem',
          background: 'white',
        }}
      >
        <Container>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: '#1a2129',
              marginBottom: '3rem',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            O Que Está Incluído
          </h2>

          <Row className="g-4">
            {service.features.map((feature, index) => (
              <Col md={6} key={index}>
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #f0f2f5',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = '#4e83af';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.borderColor = '#f0f2f5';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      background:
                        'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </div>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: '#334155',
                      fontWeight: '500',
                      lineHeight: '1.6',
                    }}
                  >
                    {feature}
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Final */}
      <section
        style={{
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #4e83af 0%, #3a5f7d 100%)',
          textAlign: 'center',
        }}
      >
        <Container>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Pronto para Começar?
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
            }}
          >
            Entre em contato agora e receba uma proposta personalizada para o
            seu negócio
          </p>
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: 'white',
              color: '#4e83af',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow =
                '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            Solicitar Contato Agora
          </button>
        </Container>
      </section>

      {/* Modal de Contato */}
      <ContactModal
        show={showModal}
        onHide={() => setShowModal(false)}
        serviceName={service.title}
        serviceId={service.id}
      />
    </>
  );
};

export default ServiceDetails;
